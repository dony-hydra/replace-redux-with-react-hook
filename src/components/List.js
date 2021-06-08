import React, { useContext } from "react";
import { ListContext } from "../context";

const List = () => {
  const [tasks] = useContext(ListContext);
  //   const tasks = [];
  return (
    <ul>
      {tasks.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
