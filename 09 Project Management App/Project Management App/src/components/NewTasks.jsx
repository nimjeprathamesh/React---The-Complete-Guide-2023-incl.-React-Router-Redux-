import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function NewTasks({onAdd}) {
    const [inputTask, setInputTask] = useState('');

    function handleChange(event) {
        setInputTask(event.target.value);
    }
    
    function handlePress() {
        if(inputTask.trim() === '') {
            return;
        }
        onAdd(inputTask);
        setInputTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <Input className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={inputTask} />
            <Button children="Add Task" onClick={handlePress} />
        </div>
    );
}