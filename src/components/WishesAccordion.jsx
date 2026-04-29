import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";
import styles from "./WishesAccordion.module.css";

export default function WishesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.wishesSection} id="wishes">
      <motion.div
        className={styles.wishesHeader}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.wishesTitle}>💛 Birthday Wishes</span>
      </motion.div>

      <div className={styles.accordion}>
        {config.wishes.map((wish, i) => (
          <motion.div
            key={i}
            className={styles.accordionItem}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <button
              className={styles.accordionButton}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>* {wish.header}</span>
              <span
                className={`${styles.accordionIcon} ${
                  openIndex === i ? styles.accordionIconOpen : ""
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className={styles.accordionContentInner}>
                    {wish.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
