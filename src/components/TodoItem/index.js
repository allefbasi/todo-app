import {Button, Col, ListGroup} from "react-bootstrap";
import {Check, Check2, Pencil, Trash} from "react-bootstrap-icons";
import {useState} from "react";
import './index.scss';

export function TodoItem(props) {
    const todo = props.todo;
    const [mouseOver, setMouseOver] = useState(false);

    const onMouseOverFunction = () => {
        setMouseOver(true);
    }

    const onMouseOutFunction = () => {
        setMouseOver(false);
    }

    return (
        <>
            <Col lg={3}/>
            <Col
                className={'todo-container d-flex bg-light border border-2 rounded align-items-center justify-content-between p-2 px-4'}
                onMouseOver={() => onMouseOverFunction()}
                onMouseOut={() => onMouseOutFunction()}>
                {todo.content}
                {
                    mouseOver ?
                        <ListGroup horizontal>
                            <ListGroup.Item className={'border-0'}>
                                <Button>
                                    <Trash size={15}/>
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className={'border-0'}>
                                <Button>
                                    <Pencil size={15}/>
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className={'border-0'}>
                                <Button>
                                    <Check2 size={15}/>
                                </Button>
                            </ListGroup.Item>
                        </ListGroup> :
                        null
                }
            </Col>
            <Col lg={3}/>
        </>

    )
}
