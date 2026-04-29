import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";
import styles from "./Gallery.module.css";

const tapePositions = ["tapeTop", "tapeCorner", "tapeTop", "tapeCorner", "tapeTop", "tapeCorner", "tapeTop", "tapeCorner", "tapeTop", "tapeCorner", "tapeTop"];

export default function Gallery() {
  const [popup, setPopup] = useState(null);

  return (
    <section className={styles.gallerySection} id="gallery">
      <motion.div
        className={styles.galleryLabel}
        initial={{ opacity: 0, rotate: -5, x: -20 }}
        whileInView={{ opacity: 1, rotate: -2, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className={styles.galleryLabelText}>postcards ♡</span>
      </motion.div>

      <div className={styles.galleryScatter}>
        {config.images.map((img, i) => (
          <motion.div
            key={i}
            className={styles.imageCard}
            initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={() => setPopup(i)}
          >
            {/* Tape strip */}
            <div className={`${styles.tape} ${styles[tapePositions[i]]}`} />

            <div className={styles.imageCardInner}>
              {img.src ? (
                <img src={img.src} alt={img.alt} loading="lazy" className={styles.monoImage} />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderIcon}>📷</span>
                  <span className={styles.placeholderText}>add photo here</span>
                </div>
              )}
            </div>

            <div className={styles.caption}>{img.caption}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.galleryNote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        ^ click to see in color ^
      </motion.div>

      {/* Postcard Popup */}
      <AnimatePresence>
        {popup !== null && (
          <motion.div
            className={styles.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setPopup(null)}
          >
            <motion.div
              className={styles.popupCard}
              initial={{ scale: 0.7, rotate: -5, opacity: 0 }}
              animate={{ scale: 1, rotate: -1.5, opacity: 1 }}
              exit={{ scale: 0.7, rotate: 5, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.popupTape} />
              <img
                src={config.images[popup].src}
                alt={config.images[popup].alt}
                className={styles.popupImage}
              />
              <div className={styles.popupCaption}>
                {config.images[popup].caption}
              </div>
              <button
                className={styles.popupClose}
                onClick={() => setPopup(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
