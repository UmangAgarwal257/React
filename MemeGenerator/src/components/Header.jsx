import trollFace from "../images/trollface.png";

const Header = () => {
  return (
    <header className="flex items-center h-[65px] bg-gradient-to-r from-[#672280] to-[#a626d3] text-white px-5">
      <img src={trollFace} className="h-full mr-1.5" />
      <h1 className="text-xl mr-auto">Meme Generator</h1>
    </header>
  );
};

export default Header;
