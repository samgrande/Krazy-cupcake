import { useState, useRef } from "react";
import { motion } from "framer-motion";
import config from "../config";
import styles from "./AudioPlayer.module.css";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const barHeights = [14, 22, 10, 26, 16, 30, 12, 24, 18, 28, 14, 20];

  return (
    <motion.div
      className={styles.audioSection}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      {config.audioSrc && (
        <audio ref={audioRef} src={config.audioSrc} loop preload="metadata" />
      )}

      <motion.span
        className={styles.musicNote}
        animate={playing ? { rotate: [0, 15, -15, 10, 0], y: [0, -5, 0] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        🎵
      </motion.span>

      <button
        className={styles.playerBtn}
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <div className={styles.bars}>
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            className={`${styles.bar} ${playing ? styles.barActive : ""}`}
            animate={
              playing
                ? { height: [h, h * 0.2, h * 0.8, h * 0.4, h] }
                : { height: h * 0.35 }
            }
            transition={
              playing
                ? {
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.04,
                  }
                : { duration: 0.4 }
            }
          />
        ))}
      </div>

      <motion.span
        className={styles.label}
        animate={playing ? { rotate: [-2, 2, -1, 1, -2] } : { rotate: -2 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {config.audioLabel}
      </motion.span>

      <motion.span
        className={styles.musicNote}
        animate={playing ? { rotate: [0, -15, 15, -10, 0], y: [0, -3, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
      >
        🎶
      </motion.span>
    </motion.div>
  );
}
