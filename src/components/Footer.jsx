import { motion } from "framer-motion";
import config from "../config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.footerGlow} />

      <motion.span
        className={styles.footerMade}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {config.footer.madeIn}
      </motion.span>

      <motion.div
        className={styles.footerName}
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className={styles.footerDot} /> {config.name}'s Birthday{" "}
        <span className={styles.footerDot} />
      </motion.div>

      <div className={styles.footerDivider} />

      <motion.span
        className={styles.footerYear}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {config.footer.year}
      </motion.span>

      <motion.div
        className={styles.footerClosing}
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
      >
        {config.footer.closing}
      </motion.div>

      <motion.div
        className={styles.footerEmoji}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        🎂
      </motion.div>
    </motion.footer>
  );
}
