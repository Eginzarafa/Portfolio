import { useEffect } from "react";
import Header from "./components/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Benner from "./components/benner";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main
      style={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
        padding: "20px",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <Header />
        <Benner />
        <Profile />
        <Portfolio />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
