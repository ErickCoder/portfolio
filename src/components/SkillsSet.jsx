import React from "react";

const SkillsSet = () => {
  return (
    <section id="skills" className="md:flex md:gap-8 md:px-8 lg:px-16 pt-10 xl:gap-12 xl:pr-0 mt-16">
  

      {/* <article className="grid md:grid-cols-[repeat(2,_20rem)] justify-items-center md:gap-12 md:px-8 lg:grid-cols-2 md:place-content-start md:grid-flow-row"> */}
    {/*   <article> */}
     {/*    <div className=" md:w-full"> */}
          <section className="md:w-[400px] my-auto lg:w-[700px]">
            <p className="text-white pt-10 px-5 font-sen text-3xl font-bold ">
              SkillSet
            </p>

            <p className="text-[#8491A0] text-lg font-sen font-normal text-justify pl-5 pr-4 py-6">
              With skills in over 4 different fields of design, I am the perfect
              person to hire when it comes to a full fledged project. Whatever
              your needs are, I can pretty much take on any challenge.
            </p>
          </section>
       {/*  </div> */}

      
        <section className="grid md:grid-cols-[repeat(2,_16rem)] md:gap-6 md:justify-items-start lg:grid-cols-[repeat(2,_16rem)]      xl:grid-cols-[repeat(2,_24rem)]">

          {/*  Frameworks */}
        <article className="p-5 grid gap-3">
          <div className="">
            <img src="/icons/puzzle3.svg" alt="" />
          </div>

          <div className="grid gap-3">
            <p className="text-white font-sen text-2xl font-bold">
              Frameworks
            </p>

            <p className="text-[#8491A0]  text-lg font-sen font-normal">
              React{" "}
            </p>
            <p className="text-[#8491A0] text-lg font-sen font-normal">
              Wordpress{" "}
            </p>
            <p className="text-[#8491A0]   text-lg font-sen font-normal">
              Boostrap{" "}
            </p>
          </div>
        </article>

           {/* Source Control */}
           <section className="p-5 grid gap-3">
          <div className="">
            <img src="/icons/puzzle3.svg" alt="" />
          </div>

          <div className="grid gap-3">
            <p className="text-white font-sen text-2xl font-bold">
              Source Control
            </p>

            <p className="text-[#8491A0]  text-lg font-sen font-normal">
              Git/GitHub{" "}
            </p>
            <p className="text-[#8491A0]  text-lg font-sen font-normal">
              SCRUM/ Agil{" "}
            </p>
          </div>
        </section>

        
        {/*  langugages */}
        <section className="p-5 grid gap-3">
          <div className="">
            <img src="/icons/puzzle3.svg" alt="" />
          </div>
          <div className="grid gap-3">
            <p className="text-white font-sen text-2xl font-bold">
              Languages
            </p>

            <p className="text-[#8491A0] text-lg font-sen font-normal">
              Html{" "}
            </p>
            <p className="text-[#8491A0] text-lg font-sen font-normal">
              CSS/ Tilwind{" "}
            </p>
            <p className="text-[#8491A0] text-lg font-sen font-normal">
              JavaScript{" "}
            </p>
          </div>
        </section>

        {/* UI/UX */}
        <section className="p-5 grid gap-3">
          <div className="">
            <img src="/icons/puzzle3.svg" alt="" />
          </div>
          <div className="grid gap-3">
            <p className="text-white  font-sen text-2xl font-bold">
              UX/UI
            </p>

            <p className="text-[#8491A0]  text-lg font-sen font-normal">
              Figma{" "}
            </p>

            <p className="text-[#8491A0]  text-lg font-sen font-normal">
              Sketch{" "}
            </p>
          </div>
        </section>
        </section> 
      

     

   {/*    </article> */}
    </section>
  );
};

export default SkillsSet;
