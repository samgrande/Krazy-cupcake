import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["✨", "💛", "🌟", "💫", "⭐"];

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = useCallback((e) => {
    const sparkle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      size: 12 + Math.random() * 14,
    };
    setSparkles((prev) => [...prev.slice(-8), sparkle]);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 80) return; // throttle
      lastTime = now;
      addSparkle(e);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [addSparkle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 1000));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: s.x - s.size / 2,
              y: s.y - s.size / 2,
            }}
            animate={{
              opacity: 0,
              scale: 1,
              y: s.y - s.size / 2 - 30,
              rotate: Math.random() * 60 - 30,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              fontSize: s.size,
              lineHeight: 1,
            }}
          >
            {s.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
