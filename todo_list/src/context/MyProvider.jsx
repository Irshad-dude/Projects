import { useState } from "react";
import { MyContext } from "./MyContext";

function MyProvider({ children }) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <MyContext.Provider
      value={{
        title,
        setTitle,
        tasks,
        setTasks,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;