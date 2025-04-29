import axios from 'axios'
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [id])

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`https://fakestoreapi.com/products/${id}`)
                alert("Product deleted.")
                navigate('/') // Redirect to home or product list
            } catch (err) {
                alert("Error deleting product.")
            }
        }
    }

    const handleEdit = () => {
        navigate(`/EditProduct/${id}`) 
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!product) return <div>No product found</div>

    return (
        <Container>
            <h1>Product Details</h1>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={product.image} alt={product.title} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text><strong>${product.price}</strong></Card.Text>
                            <Button variant="primary" onClick={handleEdit}>Edit</Button>{' '}
                            <Button variant="danger" onClick={handleDelete}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails
