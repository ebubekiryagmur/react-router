import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (

    <NavbarBS bg="primary" data-bs-theme="dark">
    <Container>
      <NavbarBS.Brand href="#home"></NavbarBS.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
        
        
      </Nav>
    </Container>
  </NavbarBS>
  );
}

export default Navbar;