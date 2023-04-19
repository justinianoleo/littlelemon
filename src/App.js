import "./App.css";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
