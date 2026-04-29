import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import MessageBanner from "./components/MessageBanner";
import Gallery from "./components/Gallery";
import BirthdayCard from "./components/BirthdayCard";
import WishesAccordion from "./components/WishesAccordion";
import ClosingMessage from "./components/ClosingMessage";
import Footer from "./components/Footer";
import SparkleTrail from "./components/SparkleTrail";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="app-layout">
      {/* Cursor sparkle trail */}
      <SparkleTrail />

      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Sidebar Nav */}
      <aside className="app-sidebar">
        <Navbar />
      </aside>

      {/* Main content */}
      <main className="app-main">
        <Hero />
        <AudioPlayer />
        <MessageBanner />
        <Gallery />
        <BirthdayCard />
        <WishesAccordion />
        <ClosingMessage />
        <Footer />
      </main>
    </div>
  );
}
