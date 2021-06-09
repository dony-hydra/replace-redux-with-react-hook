// screen
import ToDoList from "./screen/ToDoList";

import { ListContextProvider } from "./context";

import "./App.css";

function App() {
  return (
    <ListContextProvider>
      <div className="container mx-auto px-8 pt-10 bg-gradient-to-t from-gray-900 to-indigo-900 min-h-screen text-white">
        <ToDoList />
      </div>
    </ListContextProvider>
  );
}

export default App;
