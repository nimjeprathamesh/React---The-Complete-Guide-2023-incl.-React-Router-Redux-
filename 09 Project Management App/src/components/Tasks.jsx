import Button from "./Button.jsx";
import NewTasks from "./NewTasks.jsx";

export default function Tasks({tasks, onAdd, onDelete}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 my-4">This project does not have any tasks yet.</p>)}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-300">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <Button children='Clear' onClick={() => onDelete(task.id)} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}