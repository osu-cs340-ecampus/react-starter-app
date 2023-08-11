import "./App.css";
// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";
// Components
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/*" element={<CustomersPage />} />
      </Routes>
    </>
  );
}

export default App;
