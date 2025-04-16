
import AddToDo from "./componenets/AddToDo";
import AppName from "./componenets/AppName";
import Task from "./componenets/Task";

function App() {
  return <center className="todocontainer">
    <AppName></AppName>
    <div className="container">
      <AddToDo></AddToDo>
      <Task></Task>
    </div>
  </center>;
};
export default App
