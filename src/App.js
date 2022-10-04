import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Solutions from "./components/Solutions";
import Card from "./components/Card";
import Partner from "./components/Partner";
import Network from "./components/Network";
import Blog from "./components/Blog";
import Request from "./components/Request";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <Solutions />
      <Card />
      <Partner />
      <Network />
      <Blog />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
