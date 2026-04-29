import { motion } from "framer-motion";
import config from "../config";
import Confetti from "./Confetti";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <Confetti count={30} />

      {/* Giant faded exclamation */}
      <motion.div
        className={styles.exclaim}
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 0.12, scale: 1, rotate: 12 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        !
      </motion.div>

      {/* Floating sticker emojis */}
      {["🎂", "🎈", "✨", "🎁", "💛"].map((emoji, i) => (
        <motion.div
          key={i}
          className={`${styles.stickerWrap} ${styles[`sticker${i + 1}`]}`}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 8, -5, 3, 0] }}
          transition={{
            delay: 0.8 + i * 0.2,
            duration: 0.6,
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.3, rotate: 15 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <div className={styles.heroContent}>
        {/* Celebration opener */}
        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0, x: -30, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {config.hero.greeting}
        </motion.div>

        {/* "this wonderful" */}
        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {config.hero.subtitle}
        </motion.div>

        {/* Giant 25 + y/o */}
        <motion.div
          className={styles.ageBlock}
          initial={{ opacity: 0, scale: 0.5, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className={styles.ageNumber}>{config.age}</span>
          <span className={styles.ageLabel}>y/o</span>
        </motion.div>

        {/* Name */}
        <motion.div
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <span className={styles.nameHighlight}>{config.name}</span>!
        </motion.div>
      </div>

      {/* Handwritten side note */}
      <motion.div
        className={styles.sideNote}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        (this one's just for you)
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>scroll down</span>
        <motion.span
          className={styles.scrollArrow}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
