const Counter = ({ onIncrement, onDecrement, qty }) => {
  return (
    <div>
      <button
        onClick={onDecrement}
        disabled={qty === 1}
        className="px-3 py-1 border-2 border-gray-500 rounded font-bold disabled:text-gray-400"
      >
        -
      </button>
      <span className="px-4">{qty}</span>
      <button
        onClick={onIncrement}
        className="px-3 py-1 border-2 border-gray-500 rounded font-bold"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
