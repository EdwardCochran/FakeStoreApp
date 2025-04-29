import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <Container>
      <h1>Product List</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
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
  );
};

export default ProductList;
