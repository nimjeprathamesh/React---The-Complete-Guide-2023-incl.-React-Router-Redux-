export default function Input({textarea, id, ...prop}) {
    return (
        <>
            {textarea ? (
                <textarea {...prop} required />
            ) : (
                <input id={id} className="field" {...prop} required />
            )}
        </>
    );
}