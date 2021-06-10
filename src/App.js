// screen
import ToDoList from "./screen/ToDoList";

import { ListContextProvider } from "./context";

function App() {
  return (
    <ListContextProvider>
      <div className="container mx-auto  bg-gradient-to-t from-gray-900 to-indigo-900 min-h-screen text-white relative h-screen">
        <ToDoList />
      </div>
    </ListContextProvider>
  );
}

export default App;
