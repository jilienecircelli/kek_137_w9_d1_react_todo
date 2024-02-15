import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TaskCard from './TaskCard';
import { Task } from '../types';



type TaskDisplayProps = {
    tasks: Task[],
    changeCompletedStatus: (taskID:number) => void,
    sortTasks: (field:keyof Task) => void
}

export default function TaskDisplay({ tasks, changeCompletedStatus, sortTasks }: TaskDisplayProps) {
    const completedTasks = tasks.filter( t => t.completed);
    const pendingTasks = tasks.filter(t => !t.completed);
    return (
        <>
            <Row>
                <Form.Select onChange={e => sortTasks(e.target.value as keyof Task)}>
                    <option value='dateCreated'>Date Created</option>
                    <option value='dueDate'>Due Date</option>
                    <option value='name'>Name</option>
                </Form.Select>
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Pending Tasks</h2>
                </Col>
                {pendingTasks.map( t => <TaskCard task={t} key={t.id} changeCompletedStatus={changeCompletedStatus} /> )}
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Completed Tasks</h2>
                </Col>
                {completedTasks.map( t => <TaskCard task={t} key={t.id} changeCompletedStatus={changeCompletedStatus} /> )}
            </Row>
        </>
    )
}