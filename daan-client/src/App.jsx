import styles from "./styles";
import { Navbar, Hero } from "./components";
import Stats from "./components/Stats";
import Business from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      {/* NAVBAR */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* HERO */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* STATS */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Business />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
