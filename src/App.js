import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";
import Home from "./Home";

import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
