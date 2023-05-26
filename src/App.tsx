import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route}  from "react-router-dom";


function App() {
  return (
    <Router>

      <Nav />
      <div style={{ height: "60vh", width: "100%", background: "linear-gradient(to right, red, blue, green)" }}></div>
      <div style={{ height: "60vh", width: "100%", background: "red" }}></div>
      <div style={{ height: "60vh", width: "100%", background: "blue" }}></div>
      <div style={{ height: "60vh", width: "100%", background: "green" }}></div>
      <div style={{ height: "60vh", width: "100%", background: "yellow" }}></div>
      <div style={{ height: "60vh", width: "100%", background: "white" }}></div>
    </Router>
  );
}

export default App;
