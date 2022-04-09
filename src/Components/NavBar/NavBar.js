import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const Desktop = window.innerWidth > 640;

  return <div>{!Desktop ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
