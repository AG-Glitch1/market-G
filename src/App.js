import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
function App() {
  return (
    <NotFound>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </NotFound>
  );
}

export default App;
