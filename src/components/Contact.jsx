import React from "react";

const Contact = () => {
  return (
    <section className="font-sen pb-16 lg:grid lg:grid-cols-2 lg:px-4 lg:mt-16">
      <article className="">
        <p className="text-white text-2xl font-bold px-4 pt-20">
          Let’s talk business
        </p>
        <p className="text-[#8491A0] px-4 mt-3">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </article>

      <section className="grid px-4 mt-6">
        
        <article className="text-[#98a7b8]">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input className="bg-[#22262B] outline-none p-2" type="text" id="name" />
          </div>
        </article>

        <article className="text-[#98a7b8] mt-2">
          <div className="grid gap-2">
            <span>Email</span>
            <input className="bg-[#22262B] outline-none p-2" type="email" />
          </div>
        </article>

        <article className="text-[#98a7b8] mt-2">
          <div className="grid gap-2">
            <label htmlFor="Message">Message</label>
            <div>
              <textarea
                className=" text-[#98a7b8] bg-[#22262B] text-justify outline-none w-full px-2"
                name="Message"
                id="Message"
                cols="30"
                rows="6"
              ></textarea>
            </div>
          </div>
        </article>

        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-r from-green-300 to-blue-500  p-4  font-sen font-bold text-bla ">LET’S GET STARTED</button>
        </div>

      </section>
    </section>
  );
};

export default Contact;
