import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'


type Props = {};

export default function Navigation({}: Props) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand>To Do App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
