import "./App.css";
import Header from "./Pages/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CardsDetails from "./Pages/CardsDetails";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Sinup from "./Pages/Sinup";
import Public from "./Routes/Public";
import Contect from "./Pages/Contect";
import Private from "./Routes/Private";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />

      <Routes>
        <Route element={<Public />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sinup" element={<Sinup />} />
          
        </Route>
        <Route element={<Public />}>
        <Route path="/" element={<Home />} />
        <Route path="/contect" element={<Contect />} />
          <Route path="/cartdetails" element={<CardsDetails />} />
        </Route>
      </Routes>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
