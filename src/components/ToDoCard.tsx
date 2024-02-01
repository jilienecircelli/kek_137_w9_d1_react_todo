import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { ToDoItem } from '../types';



type ToDoCardProps = {
    todo: ToDoItem,
    changeCompletedStatus: (todoID:number)=>void
}


export default function ToDoCard({ todo, changeCompletedStatus }: ToDoCardProps) {
    return (
        <Col xs={12} md={6} lg={4}>
            <Card bg={todo.completed ? "success" : "info"} text="white" className='my-3'>
                <Card.Header>{todo.dateCreated.toString()}</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.name}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Button variant={todo.completed ? 'danger' : 'success'} onClick={() => changeCompletedStatus(todo.id)}>
                            Mark As {todo.completed ? 'Incomplete' : 'Done'}
                    </Button>
                </Card.Body>
                { todo.dueDate && <Card.Footer><b>Due:</b> {todo.dueDate.toString()}</Card.Footer>  }
            </Card>
        </Col>
    )
}