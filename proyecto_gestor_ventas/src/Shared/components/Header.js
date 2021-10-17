import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderButtons from './HeaderButtons';

const Header = ({ isLoggedIn, login}) => {
    return (
       <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Assembly</Navbar.Brand>
                <Nav className="justify-content-end">
                    <HeaderButtons
                        isLoggedIn={isLoggedIn}
                        setLogin={login}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;