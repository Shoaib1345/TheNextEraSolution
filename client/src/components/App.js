import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
