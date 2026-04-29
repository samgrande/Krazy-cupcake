import { motion } from "framer-motion";
import config from "../config";
import styles from "./BirthdayCard.module.css";

export default function BirthdayCard() {
  return (
    <section className={styles.cardSection}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 60, rotate: -5, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          rotate: 0,
          scale: 1.02,
          boxShadow: "8px 10px 0px #3D1C00",
          transition: { duration: 0.3 },
        }}
      >
        {/* Decorative notches */}
        <div className={styles.notchLeft} />
        <div className={styles.notchRight} />

        <div className={styles.cardInner}>
          <div className={styles.cardRow}>
            <span className={styles.cardLabel}>{config.card.label}</span>
          </div>

          <div className={`${styles.cardDivider} ${styles.cardDividerThick}`} />

          <div className={styles.cardRow}>
            <div>
              <div className={styles.cardLabel}>date :</div>
              <div className={styles.cardValue}>{config.date}</div>
            </div>
          </div>

          <div className={styles.cardDivider} />

          <div className={styles.cardRow}>
            <div>
              <div className={styles.cardLabel}>table no.</div>
              <div className={`${styles.cardValue} ${styles.cardValueLarge}`}>
                {config.card.table}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className={styles.cardLabel}>what's happening?</div>
              <div className={styles.cardType}>{config.card.type}</div>
            </div>
          </div>

          <div className={styles.cardDivider} />

          <div className={styles.cardRow}>
            <div>
              <div className={styles.cardLabel}>guest of honor ♡</div>
              <div className={styles.cardValue}>{config.card.guest}</div>
            </div>
          </div>

          <div className={`${styles.cardDivider} ${styles.cardDividerThick}`} />

          <motion.div
            className={styles.cardNote}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {config.card.note}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={styles.doodleHeart}
        animate={{ scale: [1, 1.2, 1], rotate: [12, 18, 12] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ♡
      </motion.div>
    </section>
  );
}
