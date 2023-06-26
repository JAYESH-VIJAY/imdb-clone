export default function ErrorMessage({ error }) {
  return (
    <p className="seelist">
      <span>⛔ {error}</span>
    </p>
  );
}
