// ============================================
// 🎂 BIRTHDAY WEBSITE CONFIGURATION
// ============================================

import img1 from "./assets/2DD844FD-AFAC-4295-92FB-43A362F5D9C8.JPG";
import img2 from "./assets/6F8D246B-1CA0-4FF0-AE47-E205CC7A0048.JPG";
import img3 from "./assets/7386190A-8969-41DD-9C01-9762083875FD.JPG";
import img4 from "./assets/9814989B-3FF9-4710-A34A-A025F1FA2F65.JPG";
import img5 from "./assets/IMG-20260211-WA0043.jpg";
import img6 from "./assets/IMG_0297.jpg";
import img7 from "./assets/IMG_0726.jpg";
import img8 from "./assets/IMG_1171.jpg";
import img9 from "./assets/IMG_20260114_003552.jpg";
import img10 from "./assets/IMG_6436.jpg";
import img11 from "./assets/IMG_6484.jpg";
import img12 from "./assets/IMG_8831.jpg";
import audioFile from "./assets/on_melancholy_hill.mp3";

const birthDate = new Date("2001-04-30");
const currentDate = new Date();
let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
const m = currentDate.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
  calculatedAge--;
}
const currentYear = currentDate.getFullYear();

const config = {
  name: "Sayani",
  date: `April 30, ${currentYear}`,
  age: calculatedAge,

  // --- Hero Section ---
  hero: {
    greeting: `Yoooooo guess who made it till ${currentYear} ??`,
    subtitle: "this wonderful",
  },

  // --- Milestones ---
  milestones: {
    title: "Stuffs I did with you this year",
    items: [
      { number: "527", label: "total number of photos I clicked with you" },
      { number: "12", label: "the number of movies I watched with you" },
      { number: "∞", label: "the number of songs you suggested me" },
    ],
  },

  // --- Gallery Images ---
  images: [
    { src: img1, alt: "Postcard 1", caption: "🔥" },
    { src: img2, alt: "Postcard 2", caption: "🤌" },
    { src: img3, alt: "Postcard 3", caption: "💀" },
    { src: img4, alt: "Postcard 4", caption: "🫠" },
    { src: img5, alt: "Postcard 5", caption: "🤡" },
    { src: img6, alt: "Postcard 6", caption: "👻" },
    { src: img7, alt: "Postcard 7", caption: "🫣" },
    { src: img8, alt: "Postcard 8", caption: "💅" },
    { src: img9, alt: "Postcard 9", caption: "🧿" },
    { src: img10, alt: "Postcard 10", caption: "🪩" },
    { src: img11, alt: "Postcard 11", caption: "🤝" },
    { src: img12, alt: "Postcard 12", caption: "✨" },
  ],

  // --- Birthday Card ---
  card: {
    label: `Ticket No: ${String(calculatedAge).padStart(4, '0')}`,
    table: String(calculatedAge),
    type: "A milestone of a life",
    guest: "Sayani",
    note: "( a celebration called life )",
  },

  // --- Audio ---
  audioSrc: audioFile,
  audioLabel: "play birthday tune",

  // --- Accordion Wishes ---
  wishes: [
    {
      header: "🎂 THE AUDACITY TO AGE THIS GRACEFULLY",
      content:
        `${calculatedAge} and still getting carded? Sure, Dear. But honestly, the way you refuse to age like a normal person is both inspirational and deeply unfair. Whatever skincare routine the universe gave you, I need the link.`,
    },
    {
      header: "✨ AN UNCOMFORTABLY HONEST REVIEW",
      content:
        "You're the person who'll send me a song at 2 AM with zero context and somehow it's exactly what I needed. You quote movies I've never seen and then look personally offended when I say I haven't seen them. You're annoying in the best way. Life's better with you in it. There, I said it.",
    },
    {
      header: "💛 THE ONE WHERE I GET SENTIMENTAL (don't tell anyone)",
      content:
        "Every photo with you is my favorite photo. Every movie night turns into a therapy session with snacks. Every playlist you make ruins every other playlist forever. You make the world a softer, funnier, warmer place just by showing up. Now stop reading this and go eat your cake. 🎂",
    },
  ],

  // --- Navbar Links ---
  nav: [
    { label: "THE MAIN EVENT", target: "hero" },
    { label: "OUR YEAR IN NUMBERS", target: "message" },
    { label: "POSTCARDS", target: "gallery" },
    { label: "THINGS I'LL DENY SAYING", target: "wishes" },
  ],

  // --- Closing Message ---
  closingMessage:
    "You are the sweetest woman I came to know and with the most amazing personality one can ever have, and always stay this kind like you are. Wish you a very happy birthday",

  // --- Footer ---
  footer: {
    madeIn: "~hex",
    year: String(currentYear),
    closing: "you are now officially",
  },
};

export default config;
