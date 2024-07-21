import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: "fa-twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in",
  },
  {
    icon: "fa-github",
    href: "https://www.github.com/in",
  },
];

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

function SocialButtons({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButtons key={index} icon={data.icon} link={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButtons key={index} icon={data.icon} link={data.href} />
        ))}
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
