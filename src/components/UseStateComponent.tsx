import React, { useState } from "react";

const UseStateComponent = () => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  return (
    <div
      className="flex justify-center items-center p-2 mt-2
    border-2 shadow-lg border-gray-700 mx-auto md:w-1/2 w-5/6 space-y-2"
    >
      <div>
        <h1 className="text-xl text-blue-800 my-4">useState</h1>
        <div>{JSON.stringify(arr)}</div>
        <button
          className="btn my-2"
          onClick={() => setArr([...arr, arr.length + 1])}
        >
          Add to array
        </button>
        <div>{JSON.stringify(name)}</div>
        <button className="btn m-2" onClick={() => setName("Ali")}>
          Set Name
        </button>
      </div>
    </div>
  );
};

export default UseStateComponent;
