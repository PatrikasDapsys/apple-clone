import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppleLogoGrey from "./images/apple-logo-grey.png";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
