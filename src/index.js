import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButtons({ icon }) {
  return (
    <button>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButtons icon="fa-facebook" />
        <SocialButtons icon="fa-twitter" />
        <SocialButtons icon="fa-instagram" />
      </div>
      <div className="social-buttons right">
        <SocialButtons icon="fa-linkedin" />
        <SocialButtons icon="fa-github" />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        My name is <b>Black Cat</b> and I am an Engineer
      </p>
      <p>
        To say that I love software is an understatement, I spend every working
        hour building something fun & watching Tech Podcasts or attending
        Meetups & Conference
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="🎓 PhD" />
      <Badge text="🚵‍♀️ Mountainers" />
      <Badge text="🎲 3D Geek" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
