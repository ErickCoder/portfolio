import React from 'react'

const NavBar = () => {
  return (
    <section className='text-white'>
    <article className='flex justify-between px-2 py-2'>
    <div className='font-sen font-bold text-3xl'>
      <span>Erick.C</span>
    </div>

    <div>
      <button>
      <i className='bx bx-menu-alt-right text-3xl text-gray-400'></i>
      </button>
    </div>
    </article>

    </section>
  )
}

export default NavBar