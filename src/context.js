import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = (props) => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  return (
    <ListContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </ListContext.Provider>
  );
};
