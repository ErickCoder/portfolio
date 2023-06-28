import React from "react";

const Footer = () => {
  return (
    <section className="text-white bg-[#22262B] flex justify-around">
      
      <section>
        <p className="font-extrabold text-3xl font-sen pt-10 px-3">Erick.C</p>
        <div className="flex justify-start gap-3 px-3 pt-4 text-3xl">
   
          <a href="#" className="cursor-pointer">
            <i className="bx bxl-github from-pink-500 via-greeb-300 to-rose-500 bg-gradient-to-r bg-clip-text text-transparent hover:text-red-400 duration-500 hover:translate-y-[-5px] hover:duration-300 "></i>
          </a>
   
          <a href="#" className="cursor-pointer">
            <i className="bx bxl-twitter from-pink-500 via-greeb-300 to-rose-500 bg-gradient-to-r bg-clip-text text-transparent hover:text-red-400 duration-500 hover:translate-y-[-5px] hover:duration-300"></i>
          </a>
    
          <a href="#" className="cursor-pointer">
            <i className="bx bxl-linkedin-square from-pink-500 via-greeb-300 to-rose-500 bg-gradient-to-r bg-clip-text text-transparent hover:text-red-400  duration-500 hover:translate-y-[-5px]  hover:duration-300"></i>
          </a>
        </div>
      </section>
    {/* Section Right */}
      <section className="pb-24 px-4 mt-4 font-sen">
        <article className=" grid gap-2 text-[#98a7b8] text-xl mt-3">
          <a className="cursor-pointer hover:text-white/80 duration-500 hover:translate-y-[-5px] hover:duration-500" href="#" >Home</a>
          <a className="cursor-pointer hover:text-white/80 duration-500 hover:translate-x-[-10px] hover:duration-500" href="#">About</a>
          <a className="cursor-pointer hover:text-white/80 duration-500 hover:translate-y-[5px] hover:duration-500" href="#">Work</a>
          <a className="cursor-pointer hover:text-white/80 duration-500 hover:translate-x-[10px] hover:duration-500" href="#">Process</a>
        </article>

      </section>
    </section>
  );
};

export default Footer;
