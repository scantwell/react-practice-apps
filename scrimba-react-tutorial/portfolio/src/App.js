import headshot from "./images/headshot.png";
import IconMail from "./images/Mail.png";
import IconTwitter from "./images/Twitter Icon.png";
import IconFacebook from "./images/Facebook Icon.png";
import IconInstagram from "./images/Instagram Icon.png";
import IconLinkedIn from "./images/Linkedin Icon.png";
import IconGitHub from "./images/GitHub Icon.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={headshot} alt="" width="317" height="317" />
      </header>
      <main>
        <div className="highlights">
          <div className="title">
            <h1 className="title-name">Laura Smith</h1>
            <h3 className="title-position">Frontend Developer</h3>
            <p className="title-website">laurasmith.website</p>
            <button>
              <img src={IconMail} />
              <span>Email</span>
            </button>
          </div>
          <h2 className="content-title">About</h2>
          <p className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            odit rerum tempore dicta provident dolorem nostrum corrupti labore
            facere beatae.
          </p>
          <h2 className="content-title">Interests</h2>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in
            cum nostrum excepturi at saepe nihil voluptatum, magni reiciendis
            quas?
          </p>
        </div>
      </main>
      <footer>
        <img src={IconTwitter} alt="" />
        <img src={IconFacebook} alt="" />
        <img src={IconInstagram} alt="" />
        <img src={IconLinkedIn} alt="" />
        <img src={IconGitHub} alt="" />
      </footer>
    </div>
  );
}

export default App;
