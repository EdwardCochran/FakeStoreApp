import axios from 'axios'
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const{id} = useParams()
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

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!product) return <div>No product found</div>

  return (
    <Container> 
        <h1>ProductDetails</h1>
        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>${product.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetails