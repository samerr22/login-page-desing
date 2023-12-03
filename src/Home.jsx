import React from "react";
import User from "/image/user.png";
import Lock from "/image/padlock.png";
import Gihub from "/image/github.png";
import Neew from "/image/neeww.png";
import Serch from "/image/search.png";

function ghome() {
  return (
    <div className="">
      <div className="flex ">
        <img className=" w-screen h-screen absolute z-10" src={Neew} />

        <h1 className="z-20  m-10 ml-5 mt-[30px] font-serif text-4xl lg:absolute lg:ml-60 ">scale</h1>
        <button className="z-20 font-serif text-lg ml-[420px] mt-10 absolute lg:ml-[78%] ">

          Sign up
          <span className="absolute left-[62px] top-[25px] transform -translate-y-5  z-20 text-sm  ">
            &rarr;
          </span>
        </button>
        <h1 className=" hidden lg:block absolute z-30  lg:text-gray-600 lg:mt-[41px] lg:ml-[1020px] lg:text-[17px]">Don't have an account?</h1>
        <h1 className="z-20 absolute left-[145px] mt-[100px] font-serif text-xl lg:left-[640px] lg:top-[50px] lg:text-2xl ">
          Log in to your account{" "}
        </h1>

        <div className="z-30 ">
          <button className="z-30  uppercase font-sans mt-[160px] w-[340px] h-[46px] bg-blue-600 mx-[-60px] shadow-lg rounded-3xl text-white  hover:shadow-xl  lg:absolute lg:top-[60px] lg:ml-[38%] ">
            <span className="z-20 w-[45px] h-[46px]  ml-[-170px] bg-white absolute mt-[-13px] rounded-tl-3xl rounded-bl-3xl">
              <img className=" w-[20px] mt-[13px] ml-[13px]" src={Serch} />
            </span>
            <p className="ml-[-70px] text-sm font-serif cursor-pointer ">
              log in with google
            </p>
          </button>

          <button className="z-20  uppercase font-sans mt-[18px] w-[340px] h-[46px] bg-gray-800 mx-[-60px] shadow-lg rounded-3xl text-white  hover:shadow-xl lg:absolute lg:top-[265px] lg:ml-[38%]  ">
            <span className="z-20 w-[45px] h-[46px]  ml-[-170px] bg-gray-700 absolute mt-[-13px] rounded-tl-3xl rounded-bl-3xl">
              <img className=" w-[22px] mt-[13px] ml-[13px]" src={Gihub} />
            </span>
            <p className="ml-[-70px] text-sm font-serif">log in with github</p>
          </button>

          <h1 className="absoulte ml-[100px] mt-[20px] text-slate-500 lg:absolute lg:top-[330px] lg:ml-[48%] ">or</h1>

          <card className=" absolute w-[340px] h-[46px] bg-slate-200 rounded-lg ml-[-65px] top-[330px] lg:absolute lg:top-[390px] lg:ml-[38%] ">
            <img className="absolute w-[20px] mt-[13px] ml-[13px]" src={User} />
          </card>

          <input
            className="  absolute w-[290px] h-[46px] bg-slate-200 rounded-lg ml-[-16px] top-[330px] focus:outline-none lg:absolute lg:top-[390px] lg:ml-[41%] "
            type="text"
            placeholder=" Email"
          />

          <card className=" absolute w-[340px] h-[46px] bg-slate-200 rounded-lg ml-[-65px] top-[390px] lg:absolute lg:top-[455px] lg:ml-[38%]  ">
            <img className="absolute w-[20px] mt-[13px] ml-[13px]" src={Lock} />
          </card>

          <input
            className="  absolute w-[290px] h-[46px] bg-slate-200 rounded-lg ml-[-16px] top-[390px] focus:outline-none  lg:absolute lg:top-[455px] lg:ml-[41%]  "
            type="text"
            placeholder=" Password"
          />
          <h1 className="mt-[140px] ml-[-10px] font-serif text-blue-700 cursor-pointer lg:absolute lg:top-[380px] lg:ml-[41%] ">Don't remember your passowrd?</h1>

          <button className="w-[340px] h-[45px] bg-black rounded-[40px] ml-[-70px] mt-[30px] text-white font-medium text-lg lg:absolute lg:top-[540px] lg:ml-[38%] hover:shadow-xl ">Login</button>
        </div>
      </div>
    </div>
  );
}
export default ghome;
