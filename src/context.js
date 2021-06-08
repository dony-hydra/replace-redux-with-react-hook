import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  return (
    <ListContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </ListContext.Provider>
  );
};
