import { motion } from "framer-motion";
import config from "../config";
import styles from "./ClosingMessage.module.css";

export default function ClosingMessage() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.quoteWrap}
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.tape} />

        <motion.span
          className={styles.quoteMark}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        >
          "
        </motion.span>

        <motion.p
          className={styles.quoteText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {config.closingMessage}
        </motion.p>

        <motion.span
          className={styles.quoteMarkEnd}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        >
          "
        </motion.span>

        <motion.div
          className={styles.signature}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          — with all my heart 💛
        </motion.div>
      </motion.div>

      {/* Floating decorations */}
      {["🌸", "✨", "💫"].map((emoji, i) => (
        <motion.div
          key={i}
          className={`${styles.floater} ${styles[`floater${i + 1}`]}`}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </section>
  );
}
