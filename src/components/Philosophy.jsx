import React from "react";

const Philosophy = () => {
  return (
    <section className="bg-gradient-to-r from-teal-200 to-lime-200 grid md:grid-rows-[1fr] md:grid-cols-[repeat(1,_1fr_370px)]  lg:grid-cols-2 mt-36">



      <div className="grid gap-y-1">
        <div>
          <p className="text-[#181823] font-sen text-2xl md:text-3xl font-bold px-3 pt-10 text-center">
            Philosophy & values
          </p>
        </div>
        <div className="text-base text-center">
          <p className="text-[#181823] p-5 pt-4 font-sen">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </p>
        </div>

    <div className=" flex justify-center pb-4">
    <div className="px-5 pb-10 pt-4">
          <button
            href=""
            className="text-[#181823] font-medium border-2 p-2 border-[#181823] "
          >
            Check my Linkedin
          </button>
        </div>
    </div>
      </div>




      <div className="bg-[url(/images/Skills.jpg)] bg-cover bg-center h-80 md:h-full">
     {/*    <img className="md:h-[100%] overflow-hidden" src="/images/Skills.jpg" alt="" /> */}
      </div>
    </section>
  );
};

export default Philosophy;
