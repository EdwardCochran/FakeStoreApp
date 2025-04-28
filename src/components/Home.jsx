import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to FakeStore!</h1>
      <p className="lead">Your one-stop shop for fake products!</p>
      <Button variant="primary" onClick={() => navigate('/products')}>
        Browse Products
      </Button>
    </Container>
  );
}

export default Home;