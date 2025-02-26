import trollFace from "../images/trollface.png";

const Header = () => {
  return (
    <header className="flex items-center h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] text-white p-5">
      <img className="h-full mr-[6px]" src={trollFace} alt="Troll Face" />
      <h1 className="text-xl mr-auto">Meme Generator</h1>
    </header>
  );
};

export default Header;
