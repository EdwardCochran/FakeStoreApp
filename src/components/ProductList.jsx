import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ProductList = () => {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        setProducts(response.data)
        setLoading(false)
    })
    .catch((error) => {
        setError(error)
        setLoading(false)
    })
}, [])

if (loading) return <div>Loading...</div>
if (error) return <div>Error: {error.message}</div>
if (!products || products.length === 0) return <div>No products found</div>

  return (
    <Container> 
        <h1>ProductList</h1>
        <Row>
        {products.map((product) => (
            <Col key={product.id}>
                <Card>
                    <Card.Img  src={product.image} width={20} alt={product.title} />
                    <Card.Body>
                        <Card.Title>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                        </Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
        
     
  )
}

export default ProductList