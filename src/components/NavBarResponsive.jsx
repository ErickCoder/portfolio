import React, { useState } from 'react'


const NavBarResponsive = () => {
  
  let Links =[
    {name:"HOME",link:""},
    {name:"ABOUT",link:"#presentation"},
    {name:"PROJECTS",link:"#projects"},
    {name:"SKILLS",link:"#skills"},
    {name:"CONTACT",link:"#contact"},
  ];

  const [open, setOpen] = useState(false)

  return (


    <div className='shadow-md w-full fixed top-0 left-0 font-sen z-20 '>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
      
         <span className='text-3xl text-[#10fcdc] mr-1 pt-2'>
        <ion-icon name="globe-outline"></ion-icon>
        </span> 
        <span className='font-sen text-white md:text-xl'>
        Erick Cedeño
        </span>
    
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-[#616c7a] hover:text-[#10fcdc]'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-[#363c44] md:bg-black md:mx-0  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 ease-in ${open ? 'top-16 opacity-100 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-6 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-[#98a7b8] hover:text-[#10fcdc] duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default NavBarResponsive