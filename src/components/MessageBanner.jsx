import { motion } from "framer-motion";
import { useRef } from "react";
import config from "../config";
import styles from "./MessageBanner.module.css";

export default function MessageBanner() {
  const ref = useRef(null);

  return (
    <section className={styles.banner} id="message" ref={ref}>
      <div className={styles.bannerBg} />

      {/* Floating stickers */}
      {["📷", "🎬", "🎵"].map((emoji, i) => (
        <motion.div
          key={i}
          className={`${styles.bannerSticker} ${styles[`sticker${i + 1}`]}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.2, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.3, rotate: 20 }}
          animate={{ y: [0, -10, 0], rotate: [0, 5, -3, 0] }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Title */}
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {config.milestones.title}
      </motion.div>

      {/* Stats grid */}
      <div className={styles.statsGrid}>
        {config.milestones.items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.statCard}
            initial={{ opacity: 0, y: 50, rotate: -5 + i * 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 + i * 3 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <div className={styles.statTape} />
            <motion.span
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + i * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              {item.number}
            </motion.span>
            <span className={styles.statLabel}>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.bannerSubtext}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className={styles.bannerNote}>— and counting... —</span>
      </motion.div>
    </section>
  );
}
