import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import TimeSheetFilter from "./Filter/TimesheetFilter";
import Home from "./TimeSheetGenerator/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={SignIn} element={<SignIn />} />
        <Route path="/SignUp" Component={SignUp} element={<SignUp />} />
        <Route
          path="/TimeSheetFilter"
          Component={TimeSheetFilter}
          element={<TimeSheetFilter />}
        />
        <Route path="/Home" Component={Home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
