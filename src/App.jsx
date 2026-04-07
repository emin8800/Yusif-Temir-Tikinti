import { useState } from "react";

import TopHeader from "./components/layout/TopHeader";
import MainNav from "./components/layout/MainNav";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import Order from "./components/sections/Order";
function App() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <TopHeader />
            <MainNav scrollToSection={scrollToSection} />
      <About />
      <Works setSelectedMedia={setSelectedMedia} />
      <Order />
      <Footer />

     
    </>
  );
}

export default App;