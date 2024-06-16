import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Navega =() =>{
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className={({isActive})=> isActive ? "active": ""} to={"/"}>Home</NavLink>
            <NavLink className="mx-5" to={"/pokemones"}>Pokemones</NavLink>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navega