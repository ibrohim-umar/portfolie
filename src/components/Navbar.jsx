import React, {useState} from 'react'
import {FaBars, FaTimes,  FaGithub, FaLinkedin }  from 'react-icons/fa'

import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handler = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
        <div>
            <h1 style={{width:'50px', color:'red', fontSize:'25px', letterSpacing:'1px'}} > TSH </h1>
        </div>
        <div>
            <ul className='hidden md:flex ' >
                <li><Link  to="home"  smooth={true}  duration={500} > Home</Link> </li>
                <li><Link  to="about"  smooth={true}  duration={500} > About</Link> </li>
                <li><Link  to="skills"  smooth={true}  duration={500} > Skills</Link> </li>
                <li><Link  to="work"  smooth={true}  duration={500} > Work</Link> </li>
                <li><Link  to="contact"  smooth={true}  duration={500} > Contact</Link> </li>
                 
                
               
            </ul>
        </div>
        <div onClick={handler} className='md:hidden z-10' >
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900'} >
                <li className='py-6 text-4xl' ><Link onClick={handler} to="home"  smooth={true}  duration={500} > Home</Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handler} to="about"  smooth={true}  duration={500} > About</Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handler} to="skills"  smooth={true}  duration={500} > Skills</Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handler} to="work"  smooth={true}  duration={500} > Work</Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handler} to="contact"  smooth={true}  duration={500} > Contact</Link></li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
            <ul  >
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/shodibek-tokhirov-6a6740239"> 
                     Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/ibrohim-umar/ibrohim-umar"> 
                     GitHub <FaGithub size={30} />
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/"> 
                     Linkedin <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/"> 
                     Linkedin <BsFillPersonLinesFill size={30} />
                    </a>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar