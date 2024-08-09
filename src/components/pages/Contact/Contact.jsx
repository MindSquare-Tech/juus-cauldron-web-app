import React, {useState} from "react";
import Header from "../../utils/Header.jsx";
import Footer from "../../utils/Footer";
import { motion } from "framer-motion";
import ContactCards from "../../utils/ContactCards.jsx";
import ContactForm from "../../utils/ContactForm.jsx";
import Footerv2 from "../../utils/Footerv2.jsx";
import Footerv3 from "../../utils/Footerv3.jsx";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className="pt-32" onClick={() => setIsOpen(false)}>
        <h1 className="text-center text-3xl lg:text-4xl font-light lg:font-normal">Get In Touch</h1>
        <ContactForm />
        <ContactCards />
      </main>
      <div>
        <Footerv3 />
      </div>
    </motion.div>
  );
}

export default Contact;
