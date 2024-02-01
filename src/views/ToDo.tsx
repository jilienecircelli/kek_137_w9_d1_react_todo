import { useState } from 'react';
import ToDoDisplay from '../components/ToDoDisplay';
import ToDoForm from '../components/ToDoForm';
import { ToDoItem, ToDoFormObject } from '../types';


type Props = {}

export default function ToDo({}: Props) {
    const [ todo, setToDo ] = useState<ToDoItem[]>([]);

    const addNewToDo = (newToDoData: ToDoFormObject) => {
        const newToDo:ToDoItem = {
            id: todo.length + 1,
            name: newToDoData.name!,
            description: newToDoData.description!,
            dateCreated: new Date(),
            completed: false
        }
        if (newToDoData.dueDate){
            newToDo.dueDate = new Date(newToDoData.dueDate)
        }
        setToDo([...todo, newToDo])
    }

    const sortToDo = (field:keyof ToDoItem) => {
        const copiedToDo = [...todo]
        copiedToDo.sort( (a:ToDoItem, b:ToDoItem) => a[field]! > b[field]! ? 1 : -1 )
        setToDo(copiedToDo)
    }

    return (
        <>
            <ToDoForm addNewToDo={addNewToDo} />
            <ToDoDisplay todos={todo} sortToDo={sortToDo} />
        </>
    )
}