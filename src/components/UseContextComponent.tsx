import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user: UserState = useContext<UserState>(UserContext);

  return (
    <div
      className="flex flex-col justify-center items-center p-2 mt-2
    border-2 shadow-lg border-gray-700 mx-auto md:w-1/2 w-5/6 space-y-2"
    >
      <h1 className="text-xl text-blue-800 my-4">useContext</h1>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "Aylin",
    last: "Temel",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
    </UserContext.Provider>
  );
};

export default UseContextComponent;
