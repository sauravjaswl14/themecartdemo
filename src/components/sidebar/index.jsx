import logo from "../../assets/logo.png";
import homeIcon from "../../assets/icons/home.png";
import giftIcon from "../../assets/icons/gift.png";
import windowIcon from "../../assets/icons/windows.png";
import paintIcon from "../../assets/icons/paint.png";
import circlesIcon from "../../assets/icons/three-circle.png";
import triangleCircleIcon from "../../assets/icons/triangle-circle.png";

export default function SideBar() {
  return (
    <aside className="w-20 pt-6 h-full bg-white border-r-2 border-gray-200 flex flex-col gap-y-12 items-center">
      <img src={logo} className="w-10" alt="logo" />
      <div className="flex flex-col gap-y-10 items-center">
        <img src={homeIcon} className="w-5" alt="home" />
        <div className="w-10 h-10 flex justify-center items-center rounded-md bg-gray-200">
          <img src={giftIcon} className="w-5 rounded-md" alt="gift" />
        </div>
        <img src={windowIcon} className="w-5" alt="window" />
        <img src={paintIcon} className="w-5" alt="paint" />
        <img src={circlesIcon} className="w-5" alt="circles" />
        <img src={triangleCircleIcon} className="w-5" alt="triangle circles" />
      </div>
    </aside>
  );
}
