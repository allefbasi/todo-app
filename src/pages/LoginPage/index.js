import {Button, Card, Container, Form} from "react-bootstrap";
import {useState} from "react";

export function LoginPage() {
    const [username, setUsername] = useState('');

    const onSubmit = () => {
        localStorage.setItem('username', username);
        window.location.reload();
    }
    return (
        <>
            <Container fluid className={'d-flex justify-content-center align-items-center vh-100'}>
                <Card className='text-center w-25'>
                    <Card.Body>
                        <Form onSubmit={() => onSubmit()}>
                            <Form.Control className={'mb-3'} placeholder="Username" value={username}
                                          onChange={(e) => setUsername(e.target.value)}/>
                            <Button className={'w-100'} variant="primary" type={'submit'}>Sign In</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
