import "./App.css";
import { StudentForm } from "./components/StudentForm";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm />
      <StudentForm />
    </div>
  );
}

export default App;
