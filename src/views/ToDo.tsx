import { useState } from 'react';
import TaskDisplay from '../components/TaskDisplay';
import TaskForm from '../components/TaskForm';
import { Task, TaskFormObject } from '../types';


type Props = {}

export default function ToDo({}: Props) {
    const [ tasks, setTasks ] = useState<Task[]>([]);

    const addNewTask = (newTaskData: TaskFormObject) => {
        let newTask:Task = {
            id: tasks.length + 1,
            name: newTaskData.name!,
            description: newTaskData.description!,
            dateCreated: new Date(),
            completed: false
        }
        if (newTaskData.dueDate){
            newTask.dueDate = new Date(newTaskData.dueDate)
        }
        setTasks([...tasks, newTask])
    }

    const changeCompletedStatus = (taskID:number) => {
        let updatedTasks = tasks.map( t => t.id === taskID ? {...t, completed: !t.completed} : t )
        setTasks(updatedTasks)
    }

    const sortTasks = (field:keyof Task) => {
        let copiedTasks = [...tasks]
        copiedTasks.sort( (a:Task, b:Task) => a[field]! > b[field]! ? 1 : -1 )
        setTasks(copiedTasks)
    }

    return (
        <>
            <TaskForm addNewTask={addNewTask} />
            <TaskDisplay tasks={tasks} changeCompletedStatus={changeCompletedStatus} sortTasks={sortTasks} />
        </>
    )
}