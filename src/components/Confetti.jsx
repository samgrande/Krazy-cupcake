import { motion } from "framer-motion";
import { useMemo } from "react";

const SHAPES = ["heart", "star", "circle", "sparkle"];
const COLORS = [
  "#E8845C",
  "#FFB347",
  "#D4A574",
  "#FADADD",
  "#F5DEB3",
  "#FF8C69",
];

function Shape({ type, color, size }) {
  if (type === "heart")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  if (type === "star")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  if (type === "sparkle")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
      </svg>
    );
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default function Confetti({ count = 25 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 10 + Math.random() * 18,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 3,
      drift: -30 + Math.random() * 60,
    }));
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `-5%`,
            opacity: 0,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            y: [`-5%`, `${p.y + 50}%`, `105%`],
            x: [`${p.x}vw`, `${p.x + p.drift / 5}vw`, `${p.x + p.drift / 2}vw`],
            opacity: [0, 0.7, 0.5, 0],
            rotate: [0, 180, 360],
            scale: [0, 1, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ position: "absolute" }}
        >
          <Shape type={p.shape} color={p.color} size={p.size} />
        </motion.div>
      ))}
    </div>
  );
}
