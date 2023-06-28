import React from "react";

const Languages = () => {
  return (
    <section className="  grid grid-cols-2 h-[320px] pt-0 justify-items-center md:grid-cols-6 md:h-[150px] md:items-center  text-3xl font-sen">

      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">Tailwind</span>
        <span> 
      
          <i className="bx bxl-tailwind-css text-3xl  from-[#38BDF8] via-[#2ebdfa] to-[#38BDF8] bg-gradient-to-r bg-clip-text text-transparent"></i>
        </span>
      </div>

      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">Html</span>
        <span>
        <i className='bx text-3xl bxl-html5 from-orange-500 via-orange-400 to-orange-500  bg-gradient-to-r bg-clip-text text-transparent'></i>
        </span>

      </div>
      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">CSS</span>
        <span>
        <i className='text-3xl bx bxl-css3 from-[#2062AF] #399DD9 to-[#44a8e6] bg-gradient-to-r bg-clip-text text-transparent' ></i>
        </span>
      </div>
      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">GIT</span>
        <span>
        <i className='text-3xl bx bx-git-branch text-white' ></i>
        </span>
      </div>
      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">JavaScript</span>
        <span>
        <i className='text-3xl bx bxl-javascript from-[#F5E01F] via-[#ffe600] to-[#F5E01F] bg-gradient-to-r bg-clip-text text-transparent'  ></i>
        </span>
      </div>
      <div className="flex flex-col text-center justify-e font-sen font-semibold text-lg">
      <span className="text-[#8491A0]">React</span>
        <span>
        <i className='text-3xl bx bxl-react from-[#62DCFC] via-[#15c1ec] to-[#62DCFC] bg-gradient-to-r bg-clip-text text-transparent'></i>
        </span>
      </div>

     
    </section>
  );
};

export default Languages;
