import React, { useState, useContext } from "react";
import { ListContext } from "../context";

const AddItem = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useContext(ListContext);

  const handleKey = (evt) => {
    if (input === "") return;
    if (evt.key === "Enter") {
      //   setTasks
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          onKeyDown={handleKey}
        />
      </div>

      <div>
        <button
          onClick={() => {
            if (input === "") return;
            setTasks([...tasks, input]);
            setInput("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddItem;
