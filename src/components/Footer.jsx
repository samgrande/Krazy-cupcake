import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import config from "../config";
import styles from "./Footer.module.css";

export default function Footer() {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    const birthDate = new Date("2001-04-30T00:00:00");

    const updateCounter = () => {
      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();

      if (seconds < 0) {
        minutes--;
        seconds += 60;
      }
      if (minutes < 0) {
        hours--;
        minutes += 60;
      }
      if (hours < 0) {
        days--;
        hours += 24;
      }
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      const pad = (n) => String(n).padStart(2, "0");
      setCounter({
        years: pad(years),
        months: pad(months),
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds)
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);
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
        className={styles.liveCounter}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
      >
        {counter && (
          <div className={styles.counterWrap}>
            <div className={styles.timeUnit}>{counter.years} <span className={styles.timeLabel}>years</span></div>
            <div className={styles.timeSep}>.</div>
            <div className={styles.timeUnit}>{counter.months} <span className={styles.timeLabel}>months</span></div>
            <div className={styles.timeSep}>.</div>
            <div className={styles.timeUnit}>{counter.days} <span className={styles.timeLabel}>days</span></div>
            <div className={styles.timeSep}>.</div>
            <div className={styles.timeUnit}>{counter.hours} <span className={styles.timeLabel}>hours</span></div>
            <div className={styles.timeSep}>.</div>
            <div className={styles.timeUnit}>{counter.minutes} <span className={styles.timeLabel}>minutes</span></div>
            <div className={styles.timeSep}>.</div>
            <div className={styles.timeUnit}>{counter.seconds} <span className={styles.timeLabel}>seconds</span></div>
          </div>
        )}
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
