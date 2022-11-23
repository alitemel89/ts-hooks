import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1);
    }, 1000);
    return () => window.clearInterval(timer)
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center p-2 mt-2
  border-2 shadow-lg border-gray-700 mx-auto md:w-1/2 w-5/6 space-y-2"
    >
      <h1 className="text-xl text-blue-800 my-4"> useEffect</h1>
      <div>{val}</div>
    </div>
  );
};

export default UseEffectComponent;
