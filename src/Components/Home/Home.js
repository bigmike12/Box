import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Password from "../../Assets/Password.svg";
import HidePassword from "../../Assets/HidePassword.svg";
import Check from "../../Assets/Check.svg";
import Google from "../../Assets/Google.svg";
import MBox from "../../Assets/MBox.svg";
import Box from "../../Assets/Box.svg";

const Home = () => {
  const Desktop = window.innerWidth > 640;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const form = () => (
    <div>
      <div className="flex flex-col">
        <label for="email" className="text-[10px] font-medium mb-1">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="alababadiru1234@gmail.com"
          className="w-full border-[0.66px] border-black text-[9px] text-black py-[15.95px] pl-[10.63px] font-medium"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label for="password" className="text-[10px] font-medium mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={passwordShown ? "text" : "password"}
            id="email"
            placeholder="............"
            className="w-full border-[0.66px] border-black text-[9px] text-black py-[15.95px] pl-[10.63px] placeholder:tracking-[5px] placeholder:text-[20px] placeholder:text-black placeholder:font-black"
          />
          <img
            src={passwordShown ? Password : HidePassword}
            alt="Password"
            className="absolute right-[12px] bottom-[18px]"
            onClick={() => togglePassword()}
          />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex">
          <img src={Check} alt="Check" />
          <p className="text-[8px] ml-1">Remember me next time</p>
        </div>
        <div>
          <p className="text-[8px] underline">I’ve forgotten my password</p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="mx-[32px] mdplus:mx-[146px] mt-[16px] mdplus:flex mdplus:h-[537px] mdplus:items-center">
        <div className="mdplus:w-6/12">
          <div className="mt-[64px]">
            <h1 className="font-bold text-[21px] mdplus:text-[32px]">
              Welcome back to the BOX.
            </h1>
            <p className="text-[9px] mdplus:text-[14px]">
              Feels good to have you! Please enter your details to continue.
            </p>
          </div>

          <div className="mt-[26px] mdplus:w-[468px]">{form()}</div>

          <div className="mt-4 mdplus:w-[468px]">
            <p className="w-full bg-[#000000] text-white flex justify-center items-center py-[14.6px] border-[0.66px] border-black text-[9px] font-medium hover:bg-[#a2a2a2]">
              Sign me in
            </p>
            <div className="w-full flex justify-center items-center py-[14.6px] border-[0.66px] border-black mt-3 hover:bg-[#b6b5b5]">
              <img src={Google} alt="Google" className="mr-3" />
              <p className="text-[9px] font-medium">Sign in with Google</p>
            </div>
            <p className="text-[8px] mt-2">
              Don’t have an account yet?,{" "}
              <span className="underline">Sign up</span> for free
            </p>
          </div>
        </div>

        {!Desktop ? (
          <div className="ml-5 mt-[50px] mdplus:ml-auto">
            <img src={MBox} alt="MBox" />
          </div>
        ) : (
          <div className="mdplus:ml-auto mt-[70px]">
            <img src={Box} alt="Box" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
