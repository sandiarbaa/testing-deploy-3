import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  if (count === 6) {
    setCount(0);
  } else if (count === -6) {
    setCount(0);
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-3xl font-bold mb-5">State Count App</h1>
      <div className="flex justify-center items-center gap-x-2">
        <Button onClick={handleMinus}>-</Button>
        <h3 className="text-2xl font-semibold">count is : {count}</h3>
        <Button onClick={handlePlus}>+</Button>
      </div>
      <p className="text-lg mt-5">
        If the state value reaches <span className="font-bold">5</span> or{" "}
        <span className="font-bold">-5</span>, <br /> then the state value will
        return <span className="font-bold">0</span>.
      </p>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="bg-black px-3 rounded-md shadow text-white font-bold text-2xl"
      // onClick={() => setCount(count - 1)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
