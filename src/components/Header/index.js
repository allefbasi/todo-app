import {Col, Container, Row} from "react-bootstrap";
import './index.scss'

export function Header() {
    const username = localStorage.getItem('username');

    const onLogoutClick = () => {
        localStorage.removeItem('username');
        window.location.reload();
    }

    return (
        <Container fluid>
            <Row className={'header d-flex p-2'}>
                <Col>
                    <span>
                        Todo-App
                    </span>
                </Col>
                <Col lg={8}/>
                {
                    username ?
                        <>
                            <Col className={'text-center'}>
                                {username}
                            </Col>
                            <Col>
                                <button onClick={() => onLogoutClick()}
                                        className={'bg-transparent border-0 border-start border-dark w-100'}>
                                    Logout
                                </button>
                            </Col>
                        </>
                        :
                        null
                }
                {/*<Col className={'text-center'}>*/}
                {/*    username*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <button className={'bg-transparent border-0 border-start w-100 text-white'}>*/}
                {/*        Logout*/}
                {/*    </button>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
}
