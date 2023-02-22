import "./styles.css";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function App() {
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    setDark(!dark);
  };
  console.log(dark);

  return (
    <div className={!dark ? "App dark" : "App light"}>
      <header>
        <h1>Dark & Light toggle</h1>
        <button onClick={darkMode}>
          {dark ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </header>
      <main>
        <h2>Dark mode test</h2>
        <p>
          The sun was setting on the horizon, casting a warm orange glow across
          the sky. A gentle breeze rustled through the leaves of the nearby
          trees, carrying with it the sweet scent of blooming flowers. A group
          of birds chirped merrily in the distance, their song a joyful
          accompaniment to the tranquil scene.
        </p>
      </main>
    </div>
  );
}
