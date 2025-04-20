import hamburger from "../../assets/icons/hamburger.png";
import toggleTheme from "../../assets/icons/sun.png";
import paintBoard from "../../assets/icons/paint-board.png";
import notification from "../../assets/icons/notification.png";
import menu from "../../assets/icons/windows.png";

export default function Header({ onToggle }) {
  return (
    <nav className="sticky top-0 px-5 lg:px-10 lg:pr-14 h-20 bg-white border-b-2 border-gray-200 flex justify-between">
      <button onClick={onToggle}>
        <img src={hamburger} alt="hamburger menu" className="w-10" />
      </button>

      <div className="lg:w-96 flex gap-x-5 justify-center items-center">
        <input
          type="search"
          className="hidden bg-gray-200 rounded-full py-1 px-4 lg:block"
          placeholder="search"
        />

        <div className="flex gap-x-5 items-center">
          <img src={toggleTheme} className="w-6" alt="toggle theme" />
          <img src={paintBoard} className="w-5" alt="color" />
          <img src={notification} className="w-5" alt="notification" />
          <img src={menu} className="w-4" alt="menu" />
        </div>
      </div>
    </nav>
  );
}
