import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>)}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-200">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <Button
                                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                                onClick={() => onDelete(task.id)}
                            >
                                Clear
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}