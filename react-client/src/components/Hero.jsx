export default function Hero({ text }) {
  return (
    <h1 className="w-full text-8xl pt-52 pb-4 pl-3 border-b-2 border-gray-300 bg-gradient-to-r from-gray-300 via-red-700 to-black">
      {text}
    </h1>
  );
}
