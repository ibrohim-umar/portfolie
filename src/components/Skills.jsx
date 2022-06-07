import React from 'react'
import Css from '../assets/css.jpg'
import Java from '../assets/java.jpg'
import Reacts from '../assets/react.jpg'
import Git from '../assets/github.jpg'
import Html from '../assets/html.jpg'

const Skills = () => {
  return (
    <div name='skills' className='bg-slate-900 text-gray-300' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-800' >SKILLS</p>
                <p className='py-4' > These are the technology I have worked with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]' >
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p className='my-4' >Html</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]' >
                    <img className='w-20 mx-auto' src={Css} alt="Html icon" />
                    <p className='my-4' >CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]' >
                    <img className='w-20 mx-auto' src={Java} alt="Html icon" />
                    <p className='my-4' >JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]' >
                    <img className='w-20 mx-auto' src={Reacts} alt="Html icon" />
                    <p className='my-4' >REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]' >
                    <img className='w-20 mx-auto' src={Git} alt="Html icon" />
                    <p className='my-4' >GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills