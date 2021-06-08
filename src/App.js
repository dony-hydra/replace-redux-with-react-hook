import AddItem from "./components/AddItem";
import List from "./components/List";

import { ListContextProvider } from "./context";

import "./App.css";

function App() {
  return (
    <ListContextProvider>
      <div className="bg-gray-100 min-h-screen py-6 p-10">
        <div className="font-bold text-base pt-6 pb-6 leading-6">
          <h2>Todo List</h2>
        </div>
        <div className="flex">
          <AddItem />
        </div>
        <div>
          <List />
        </div>
      </div>
    </ListContextProvider>
  );
}

export default App;
