import { useState, useEffect } from "react";
const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomIndex];
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: url,
    }));
  }

  return (
    <main className="mx-auto px-9 max-w-[600px]">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="col-span-1">
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            className="w-full mt-1.5 rounded border border-[#d5d4d8] px-1.5 min-h-[40px] font-karla"
          />
        </label>

        <label className="col-span-1">
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            className="w-full mt-1.5 rounded border border-[#d5d4d8] px-1.5 min-h-[40px] font-karla"
          />
        </label>
        <button
          onClick={getRandomMeme}
          className="col-span-2 rounded bg-gradient-to-r from-[#711f8d] to-[#a818da] text-white border-none cursor-pointer min-h-[40px] font-karla"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img src={meme.imageUrl} className="max-w-full h-auto rounded" />
        <span className="absolute text-center mx-0 my-4 px-1.5 font-impact text-2xl uppercase text-white tracking-wider [text-shadow:2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,_2px_2px_5px_#000] top-0">
          {meme.topText}
        </span>
        <span className="absolute text-center mx-0 my-4 px-1.5 font-impact text-2xl uppercase text-white tracking-wider [text-shadow:2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,_2px_2px_5px_#000] bottom-0">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
};

export default Main;
