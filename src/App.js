import "./App.css";
import TableData from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableData />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
