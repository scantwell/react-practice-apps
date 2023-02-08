import React from "react";
import MemeButtonText from "../images/memetext.png";
import MemesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const idx = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[idx].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: url,
      };
    });
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleOnChange}
        />
        <button onClick={getMemeImage} className="form-button" type="submit">
          <img src={MemeButtonText} alt="" />
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top-text">{meme.topText}</h2>
        <h2 className="meme-text bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
