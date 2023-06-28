import React from 'react'

const MyPorjects = () => {
  return (
    <section id='projects' className="pt-16 p-6 grid grid-cols-1 md:px-24 lg:grid lg:grid-cols-2 lg:gap-8 bg-black xl:grid-cols-[repeat(2,_36rem)] xl:place-content-center font-sen lg:mt-14">

    {/* left section  */}
    <section className='lg:grid gap-6'>
      <h4 className="text-gray-400 font-bold">MY PROJECTS</h4>
      <h2 className="text-2xl mt-2 md:mt-6 md:text-5xl font-semibold text-white">Work that I've done for the past 1 year.</h2>

      <article className="bg-gradient-to-b from-zinc-900/10  to-zinc-900 mt-8 md:mt-14">
        <div>
          <img className="max-w-full" src="/images/weatherApp.png" alt="" />
        </div>

        <div className="p-6">
          <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">Restaurant website design</h3>
          <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
        </div>
      </article>

      <article className="mt-8 bg-gradient-to-b from-zinc-900/10  to-zinc-900">

        <div>
          <img src="/images/pokeApi.png" alt="" />
        </div>

        <div className="p-6">
          <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">Pokémon Api</h3>
          <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
        </div>

      </article>

    </section>

    {/* rigth section  */}
    <section className='lg:grid gap-6'>
      <article className="bg-gradient-to-b from-zinc-900/10  to-zinc-900 mt-6 lg:mt-0">
        <div>
          <img src="/images/Meta.png" alt="" />
        </div>
        <div className="p-6">
          <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">Restaurant website design</h3>
          <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
        </div>
      </article>

      <article className="mt-6 bg-gradient-to-b from-zinc-900/10  to-zinc-900">
        <div>
          <img src="/images/Meta.png" alt="" />
        </div>
        <div className="p-6">
          <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start text-white font-semibold">Restaurant website design</h3>
         
          <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
        </div>
      </article>

      <div className="flex justify-center items-center md:mt-14 lg:mt-9 mt-10">
        <a href="https://github.com/ErickCoder" target='blank' className="p-6  bg-gradient-to-r from-green-300 to-blue-500 text-black font-sen font-semibold hover:to-blue-400 hover:transition-colors">VIEW ALL PROJECTS</a>
      </div>
    </section>

  </section>
  )
}

export default MyPorjects