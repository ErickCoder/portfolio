import React from "react";

const MyPorjects = () => {
  return (
    <section
      id="projects"
      className="pt-16 p-6 grid grid-cols-1 md:px-24 lg:grid lg:grid-cols-2 lg:gap-8 bg-black xl:grid-cols-[repeat(2,_36rem)] xl:place-content-center font-sen lg:mt-14"
    >
      {/* left section  */}
      <section className="lg:grid gap-6">
        <h4 className="text-gray-400 font-bold">MY PROJECTS</h4>
        <h2 className="text-2xl mt-2 md:mt-6 md:text-5xl font-semibold text-white">
          Projects that have been recently completed.
        </h2>

        <article className="bg-gradient-to-b from-zinc-900/10  to-zinc-900 mt-8 md:mt-14p">
          <div>
            <img className="max-w-full" src="/images/weatherApp.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">
              weather App
            </h3>
            <p className="pt-4 text-sm text-gray-400 text-justify ">
              Provides up-to-date information on weather conditions in different
              locations. It provides details such as temperature, humidity, wind
              speed and short-term forecast. You can search for specific
              locations or use geolocation.
            </p>
          </div>
        </article>

        <article className="mt-8 bg-gradient-to-b from-zinc-900/10  to-zinc-900">
          <div>
            <img className="max-w-full" src="/images/pokeApi.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">
              Pokémon Api
            </h3>
            <p className="pt-4 text-sm text-gray-400 text-justify">
              Web application about the pokemon animated series; you can
              register with your name and start your pokemon path, the
              application shows skills of different pokemon as well as their
              elements and movements.
            </p>
          </div>
        </article>
      </section>

      {/* rigth section  */}
      <section className="lg:grid gap-6">
        <article className="bg-gradient-to-b from-zinc-900/10  to-zinc-900 mt-6 lg:mt-0">
          <div>
            <img className="max-w-full" src="/images/crud.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold ">
              CRUD system
            </h3>
            <div className="">
              <p className="pt-4 text-sm text-gray-400 text-justify ">
                The use of a CRUD in application development offers several
                advantages and benefits. First, it provides a clear and
                standardized structure for data management, which facilitates
                system maintenance and scalability. In addition, CRUD simplifies
                interaction with the database, allowing basic operations to be
                performed quickly and efficiently. This translates into a more
                agile development and a better user experience.
              </p>
            </div>
          </div>
        </article>

        <article className="mt-6 bg-gradient-to-b from-zinc-900/10  to-zinc-900">
          <div>
            <img src="/images/e-commerce.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">
              E-commerce responsive
            </h3>

            <p className="pt-4 text-sm text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nihil quaerat dolores. Pariatur quas illo voluptate provident
              veritatis omnis.
            </p>
          </div>
        </article>

        <div className="flex justify-center items-center md:mt-14 lg:mt-9 mt-10">
          <a
            href="https://github.com/ErickCoder"
            target="blank"
            className="p-6  bg-gradient-to-r from-green-300 to-blue-500 text-black font-sen font-semibold hover:to-blue-400 hover:transition-colors"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </section>
    </section>
  );
};

export default MyPorjects;
