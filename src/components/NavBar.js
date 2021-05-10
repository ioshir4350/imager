import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props){ //props = {nav: [[link, title]], accountManagement: [signinOnlick, signupOnclick]}
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#004c3f'}}>
        <Navbar.Brand href={props.logoPath} style={{width: '150px'}}><a href="/">Imager</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto">
                <Nav.Link href='/search'>Search</Nav.Link>
                <Nav.Link href='/gallery'>Gallery</Nav.Link>
                <Nav.Link href='/features'>Features</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar