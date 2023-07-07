import React from "react";
import "./Styles/textPresentation.css";

const Presentation = () => {
  return (
    <section id="presentation" className="pt-20">
      <section className="grid justify-items-end md:relative font-sen">
        <article
          className="bg-[#22262B] min-h-[400px] md:max-w-[500px]  800:max-w-[530px]  830:max-w-[560px] 
      860:max-w-[590px]
      890:max-w-[620px]
      920:max-w-[650px]
      950:max-w-[680px]
      980:max-w-[710px]
      1010:max-w-[740px]
      1040:max-w-[770px]
      1070:max-w-[800px]
      1100:max-w-[830px]
      1130:max-w-[860px]
      1160:max-w-[890px]
      1190:max-w-[920px]
      1220:max-w-[950px]
      1250:max-w-[980px]
     1310:max-w-[900px]
     1400:max-w-[1000px]
     1430:max-w-[1010px]
     1460:max-w-[1040px]
     1490:max-w-[1070px]
     1520:max-w-[1100px]
     1550:max-w-[1130px]
     1580:max-w-[1160px]
     1600:max-w-[1100px]
     
      
      
      
      lg:max-w-[600px] lg:min-h-[530px] xl:max-w-[850px] xl:min-h-[760px] min-[1600px]:max-w-[1000px] min-[1600px]:min-h-[820px]  overflow-hidden md:flex"
        >
          <div className="md:absolute left-0 top-14 xl:top-24 ">
            <img
              className="min-[375px]:w-[100%] md:w-[370px] lg:w-[520px] xl:w-[700px] min-[1600px]:w-[800px]"
              src="/images/picture2.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col md:p-11 lg:p-14 xl:p-16 min-[1600px]:p-4 gap-5 p-5 md:justify-center md:z-10">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-7xl min-[1600px]:text-8xl  text-white ">
              I'm Erick Cedeño. A fronted developer{" "}
              <span className="text-[#6e95bc]">based in Venezuela. </span>
            </h1>
            <p className="color__text lg:text-lg min-[1700px]:text-lg text-[#ffffff] text-justify">
              I am a systems engineer, passionate about technology and its
              constant evolution. I am a responsible, proactive, sociable,
              committed to work, with leadership and organization of
              multidisciplinary teams, flexible to change and constant
              challenge.
            </p>
            <div className="cv mx-auto grid bg-[#567ba0] hover:bg-[#6e95bc] duration-300  px-2 py-1">
              <a
                download="CV_ERICK_CEDEÑO"
                href="/cv/CV.pdf"
                className="text-white  " 
              >
                <p className="font-semibold">Download CV 
                <i className='bx bxs-download font-semibold text-xl pl-2 pt-1 text-white '></i>
             
                </p>
              </a>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Presentation;
