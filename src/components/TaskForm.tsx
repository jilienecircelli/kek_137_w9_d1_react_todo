import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { TaskFormObject } from '../types';


type TaskFormProps = {
    addNewTask: (newTaskObject: TaskFormObject) => void
}

export default function TaskForm({ addNewTask }: TaskFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState<TaskFormObject>({name:'', description:'', dueDate:''})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        addNewTask(newTask);

        setShowForm(false);
        setNewTask({name:'', description:'', dueDate:''})
    }

    return (
        <>
            <Row>
                <Col>
                    <Button variant={showForm ? 'danger' : 'primary'} className='w-100 my-3' onClick={() => setShowForm(!showForm)}>
                        { showForm ? 'Close Form' : 'Add Task +' }
                    </Button>
                </Col>
            </Row>
            {showForm && (
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Task Name</Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            name='name' 
                                            placeholder='Enter Task Name' 
                                            required
                                            value={newTask.name} 
                                            onChange={handleInputChange}
                                        />
                                        <Form.Label>Task Description</Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            name='description' 
                                            placeholder='Enter Task Description' 
                                            required
                                            value={newTask.description} 
                                            onChange={handleInputChange}
                                        />
                                        <Form.Label>Due Date (Optional)</Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            name='dueDate' 
                                            placeholder='Enter Task Due Date' 
                                            value={newTask.dueDate} 
                                            onChange={handleInputChange}
                                        />
                                        <Form.Text className="text-muted">Please enter due date in the form of YYYY-MM-DD HH:MM:SS</Form.Text>
                                    </Form.Group>
                                    <Button variant='outline-success' className='w-100' type='submit'>Create Task</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}