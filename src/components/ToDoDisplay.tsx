import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToDoCard from '../components/ToDoCard';
import { ToDoItem } from '../types';



type ToDoDisplayProps = {
    todos: ToDoItem[],
    changeCompletedStatus: (todoID:number) => void,
    sortToDos: (field:keyof ToDoItem) => void
}

export default function ToDoDisplay({ todos, changeCompletedStatus, sortToDos }: ToDoDisplayProps) {
    const completedToDo = todos.filter( t => t.completed);
    const pendingToDo = todos.filter(t => !t.completed);
    return (
        <>
            <Row>
                <Form.Select onChange={e => sortToDos(e.target.value as keyof ToDoItem)}>
                    <option value='dateCreated'>Date Created</option>
                    <option value='dueDate'>Due Date</option>
                    <option value='name'>Name</option>
                </Form.Select>
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Pending To Do's</h2>
                </Col>
                {pendingToDo.map( t => <ToDoCard todo={t} key={t.id} changeCompletedStatus={changeCompletedStatus} /> )}
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Completed To Do's</h2>
                </Col>
                {completedToDo.map( t => <ToDoCard todo={t} key={t.id} changeCompletedStatus={changeCompletedStatus} /> )}
            </Row>
        </>
    )
}
