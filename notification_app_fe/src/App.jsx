import { useEffect, useState } from "react";
import Log from "./utils/logger";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "component",
      "Application loaded successfully"
    );

  }, []);

  const handleCounter = () => {

    const updatedCount = count + 1;

    setCount(updatedCount);

    Log(
      "frontend",
      "debug",
      "component",
      `Counter updated to ${updatedCount}`
    );

  };

  return (
    <>
      <section id="center">

        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt="Hero"
          />

          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />

          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>AffordMed Frontend Test</h1>

          <p>
            Logging Middleware Integrated Successfully
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={handleCounter}
        >
          Count is {count}
        </button>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">

        <div id="docs">

          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Documentation</h2>

          <p>Frontend resources and guides</p>

          <ul>

            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo"
                  src={viteLogo}
                  alt=""
                />

                Explore Vite
              </a>
            </li>

            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="button-icon"
                  src={reactLogo}
                  alt=""
                />

                Learn React
              </a>
            </li>

          </ul>

        </div>

        <div id="social">

          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Community</h2>

          <p>Connect with developers</p>

          <ul>

            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>

            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                rel="noreferrer"
              >
                X.com
              </a>
            </li>

          </ul>

        </div>

      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  );
}

export default App;