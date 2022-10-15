import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { ThemeProvider } from './components/themeContext';
import Footer from "./components/Footer";




function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-white transition-all">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer/>
      </div>
    </ThemeProvider>

  );
}

export default App;