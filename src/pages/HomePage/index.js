import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {TodoItem} from "../../components/TodoItem";

export function HomePage() {
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getTodoList();
    }, [])

    const getTodoList = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }).then((response) => {
            response.json().then((body) => {
                const newTodoList = [];
                for (const todo of body) {
                    newTodoList.push({content: todo.content, id: todo.id});
                }
                setTodoList(newTodoList);
            })
        })
    }


    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const saveNewTodo = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`,
            {
                method: 'POST',
                body: JSON.stringify({content: newTodo}),
                headers: {'content-type': 'application/json'}
            }).then(() => {
            handleCloseModal();
            getTodoList();
            setNewTodo('');
        })
    }
    return (
        <>
            <Container fluid className={'vh-100'}>
                <Row className={'p-5'}>
                    <Col lg={2}/>
                    <Col className={'d-flex justify-content-center'}>
                        <Form.Check type="checkbox" label="Show all."/>
                    </Col>
                    <Col className={'d-flex justify-content-center'}>
                        <Form.Check type="checkbox" label="Show todo list."/>
                    </Col>
                    <Col className={'d-flex justify-content-center'}>
                        <Form.Check type="checkbox" label="Show done."/>
                    </Col>
                    <Col className={'d-flex justify-content-center'}>
                        <Button className={'bg-primary'} onClick={() => handleShowModal()}>Yeni Ekle</Button>
                    </Col>
                    <Col lg={2}/>
                </Row>

                {
                    todoList.map((listItem) => (
                        <Row className={'mb-2'} key={listItem.id}>
                            <TodoItem todo={listItem}/>
                        </Row>
                    ))
                }
            </Container>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                    <Form>
                        <Form.Control as={'textarea'} placeholder="..."
                                      onChange={(e) => setNewTodo(e.target.value)}
                                      value={newTodo}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => saveNewTodo()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
