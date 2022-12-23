import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Storage Units, Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Customer" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/customers">Customers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/customers/add">
                Add Customer
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Storage Units" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/storage-units">Storage Units</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/storage-units/add">
                Add Storage Unit
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Leases" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/leases">Leases</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/payments">Payments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/leases/add">
                Add Lease
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;