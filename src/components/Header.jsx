import "./Components.css";
import tempestLogo from "./../assets/cloudy.svg";

function Header() {
  return (
    <header class="bg-[#344E41] text-white text-center p-4 w-full h-12 fixed top-0 left-0 flex items-center justify-center z-10">
        <img src={tempestLogo} alt="Tempest Logo" className="w-8 h-auto object-cover" />
        <h1 class="text-2xl mx-3">Tempest</h1>
    </header>
  );
}

export default Header;