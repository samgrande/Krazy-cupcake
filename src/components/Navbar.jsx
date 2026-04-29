import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";
import styles from "./Navbar.module.css";

const funkyColors = ["#FFD93D", "#FF6B6B", "#6BCB77", "#FFB347"];
const funkyEmojis = ["🎉", "📊", "📸", "💌"];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const descriptions = [
    `${config.name} made it to ${config.age}!! LET'S GOOOO 🔥`,
    "The numbers don't lie bestie",
    "Our cutest moments, pinned forever",
    "Warning: might make you cry (good tears)",
  ];

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayVisible : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <nav
        className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.navTop}>
          <motion.div
            className={styles.brand}
            animate={{ rotate: [-2, 1, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className={styles.brandEmoji}>🎂</span>
            <span>{config.name}'s</span>
            <span className={styles.brandAge}>{config.age}th!</span>
          </motion.div>

          <div className={styles.navItems}>
            {config.nav.map((item, i) => (
              <motion.div
                className={styles.navItem}
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              >
                <button
                  className={styles.navButton}
                  onClick={() => {
                    toggle(i);
                    scrollTo(item.target);
                  }}
                  style={{ "--accent": funkyColors[i] }}
                >
                  <span className={styles.navPill} style={{ background: funkyColors[i] }}>
                    {funkyEmojis[i]}
                  </span>
                  <span className={styles.navLabel}>{item.label}</span>
                  <span
                    className={`${styles.navIcon} ${openIndex === i ? styles.navIconOpen : ""}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className={styles.navContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className={styles.navContentInner}>
                        {descriptions[i]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.navBottom}>
          <motion.div
            className={styles.navFooterSticker}
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🎈
          </motion.div>
          <div className={styles.navFooter}>
            {config.footer.madeIn}
          </div>
        </div>
      </nav>
    </>
  );
}
