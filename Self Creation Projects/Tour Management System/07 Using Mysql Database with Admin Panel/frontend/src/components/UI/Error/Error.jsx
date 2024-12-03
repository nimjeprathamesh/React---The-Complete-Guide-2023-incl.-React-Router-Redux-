export default function Error({message}) {
  return (
    <section id='error'>
      <main>
        <h2>An error occurred!</h2>
        <p className="errMsg">{message}</p>
      </main>
    </section>
  );
}
