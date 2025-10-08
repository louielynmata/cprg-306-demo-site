export default function Button({
  displayText = "Click me",
  eventHandler,
  colors = "bg-black text-white hover:bg-blue-800 ",
}) {
  return (
    <button
      onClick={eventHandler}
      className={`${colors} py-4 px-12 my-4 bg-orange-500 rounded-full transition ease-linear duration-150 cursor-pointer `}
    >
      {displayText}
    </button>
  );
}
