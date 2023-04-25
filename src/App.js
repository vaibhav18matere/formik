import "./App.css";
import { SignupForm } from "./components/SignupForm";
import { StudentForm } from "./components/StudentForm";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm />
      <StudentForm />
      <SignupForm />
    </div>
  );
}

export default App;
