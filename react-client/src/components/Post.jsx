export default function Post({ title, body, userId, id }) {
  function getMaxLenString(maxLen, text = "") {
    return text.slice(0, maxLen);
  }
  return (
    <div className="container px-3">
      <header>
        <span className="underline text-3xl">{title}</span>
      </header>
      <div className="metadata text-sm text-gray-400">USER ID: {userId}</div>
      <section>{getMaxLenString(250, body)}</section>
    </div>
  );
}
