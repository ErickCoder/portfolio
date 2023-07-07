import React from "react";

const WorkExperience = () => {
  return (
    <section className="grid gap-y-10 ">

      <section className="min-w-[100%] md:pl-3">
        <p className="text-[#8491A0] py-12 pb-2 px-6 font-sen font-bold  ">
          KNOWLEDGE
        </p>
        <p className="text-white font-sen font-bold text-3xl px-6 lg:text-[3rem] tracking-normal lg:tracking-wide lg:leading-tight">
          Main programming languages <br /> and source control.
        </p>
      </section>

      <article className="grid md:grid-cols-2 lg:grid-cols-4  ">
        <section className="p-3   xl:p-4">
          <div className="xl:p-6">
            <p className="text-[#5e636b] text-9xl font-sen px-6 pt-7">01</p>

            <p className=" px-6 text-2xl font-sen  text-white font-semibold">
              <b className="text-[#fbad27] font-semibold">HTML</b>, structuring
              web pages{" "}
            </p>

            <p className="text-white font-sen text-lg font-medium text-justify px-6 py-3">
              I can develop and design websites, applying tags and elements to
              define the structure, format and presentation of information. I
              can organize and format texts, add images, links, lists and
              tables, among other things. In addition, I can incorporate
              multimedia elements, such as videos and audio.
            </p>
          </div>
        </section>
        <section className="p-3  xl:p-4">
          <div className="xl:p-6">
            <p className="text-[#5e636b] text-9xl font-sen px-6 pt-7">02</p>

            <p className=" px-6 text-2xl font-sen  text-white font-semibold">
              <b className="text-[#609BFF] font-semibold">CSS</b>, styles to web
              pages{" "}
            </p>

            <p className="text-white font-sen text-lg font-medium text-justify px-6 py-3">
              I can apply custom styles to HTML elements, such as colors, fonts,
              margins, spacing and layout. I can also control the position and
              size of elements, create transition and animation effects, and
              adapt the layout of a website for different devices and screen
              sizes.
            </p>
          </div>
        </section>
        <section className="p-3 xl:p-4">
          <div className="xl:p-6">
            <p className="text-[#5e636b] text-9xl font-sen px-6 pt-7">03</p>

            <p className=" px-6 text-2xl font-sen  text-white font-semibold">
              <b className="text-[#ffe600] font-semibold">JavaScript</b>,
              control user event{" "}
            </p>

            <p className="text-white font-sen text-lg font-medium text-justify px-6 py-3 pb-8">
              create dynamic effects, perform form validation, manipulate and
              modify page content in real time, make requests and receive
              responses from the server without reloading the page, create
              animations, control user events and much more.
            </p>
          </div>
        </section>

        <section className="p-3 xl:p-4">
          <div className="xl:p-6">
            <p className="text-[#5e636b] text-9xl font-sen px-6 pt-7">04</p>

            <p className=" px-6 text-2xl font-sen  text-white font-semibold">
              <b className="text-[#5de7e9] font-semibold">GIT</b>, source
              control{" "}
            </p>
            <p className="text-white font-sen text-lg font-medium text-justify px-6 py-3 pb-2">
              It allows me to create branches to work on new features or bug
              fixes without affecting the main branch, merge changes from
              different branches in a controlled way and revert unwanted
              modifications. In addition, Git facilitates cross-team
              collaboration by allowing secure and efficient sharing and merging
              of changes.
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default WorkExperience;
