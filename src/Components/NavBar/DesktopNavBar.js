import BoxLogo from "../../Assets/BoxLogo.svg";

const DesktopNavBar = () => {
  return (
    <div className="mx-[144px] mt-[47px]">
      <div className="flex justify-between pb-[21px] border-b border-black">
        <div>
          <img src={BoxLogo} alt="BoxLogo" />
        </div>

        <div className="flex">
          <h1 className="mr-[32px] underline">Explore</h1>
          <h1 className="underline">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavBar;
