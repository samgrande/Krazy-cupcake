import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";
import styles from "./Navbar.module.css";

const funkyColors = ["#b0228c", "#ea3788", "#e56b70", "#f391a0"];
const funkyEmojis = ["🎉", "📊", "📸", "💌"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

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
                    scrollTo(item.target);
                  }}
                  style={{ "--accent": funkyColors[i] }}
                >
                  <span className={styles.navPill}>
                    {funkyEmojis[i]}
                  </span>
                  <span className={styles.navLabel}>{item.label}</span>
                </button>
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
