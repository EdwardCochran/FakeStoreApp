import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function NavigationBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="basic-navbar-nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/addproduct">Add Product</Nav.Link>
              <Nav.Link href="/editproduct">Edit Product</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    }

    export default NavigationBar;