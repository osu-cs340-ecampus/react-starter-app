import "./App.css";
// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
// Components
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people/*" element={<PeoplePage />} />
      </Routes>
    </>
  );
}

export default App;