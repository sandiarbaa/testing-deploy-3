import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  if (count === 5) {
    setCount(0);
  } else if (count === -5) {
    setCount(0);
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center gap-x-2">
      <Button onClick={handleMinus}>-</Button>
      <h1 className="text-2xl font-semibold">count is : {count}</h1>
      <Button onClick={handlePlus}>+</Button>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="bg-black px-4 py-1 rounded-md shadow text-white font-bold text-2xl"
      // onClick={() => setCount(count - 1)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
