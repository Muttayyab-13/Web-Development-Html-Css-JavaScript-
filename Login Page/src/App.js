
import Uma from "./Uma";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPw from "./ForgotPw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Uma} />
        <Route path="/forgot-pass" Component={ForgotPw} />
      </Routes>
    </Router>
  );
}

export default App;
