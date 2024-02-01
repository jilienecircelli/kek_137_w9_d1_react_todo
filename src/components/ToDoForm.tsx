import React, { useState } from 'react';
import { ToDoItem } from '../types/index';

type Props = {
    setToDos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
};

const ToDoForm: React.FC<Props> = ({ setToDos }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setToDos(prev => [...prev, { id: Date.now(), task: input }]);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add To Do</button>
        </form>
    );
};

export default ToDoForm;