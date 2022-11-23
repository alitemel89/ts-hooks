import { useReducer } from "react";

const initialState = {
  counter: 10,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error("Bad action");
  }
}

function UserReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div
      className="flex flex-col justify-center items-center p-2 mt-2
    border-2 shadow-lg border-gray-700 mx-auto md:w-1/2 w-5/6 space-y-2"
    >
      <h1 className="text-xl text-blue-800 my-4">useReducer</h1>
      <div>{state.counter}</div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment
      </button>
      <button
        className="btn mx-2"
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
      >
        Decrement
      </button>
    </div>
  );
}

export default UserReducerComponent;
