import React from 'react'
import uch from '../assets/port3img.jpeg'

import House from '../assets/housingphoto.jpeg'
import ikki from '../assets/2portfolie.jpeg'
import Pizza from '../assets/pizza.jpeg'
import Ikki from '../assets/ikkirasm.jpeg'
import tort from '../assets/tort.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full mg:h-screen text-gray300 bg-slate-900' >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
          <div className='pb-8' >
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-800' >Work</p>
              <p className='py-6' >Check out of my recent work</p>
          </div>
          <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
              <div style={{backgroundImage: `url(${House})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         React JS Application
                      </span>
                      <div className='text-center'>
                          <a href="https://stellar-gingersnap-997863.netlify.app"> <button className='text-center rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                         
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${ikki})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         ReactJS
                      </span>
                      <div>
                          <a href="https://iridescent-chebakia-ddbd58.netlify.app"> <button className='rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                          
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${uch})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         ReactJS 
                      </span>
                      <div>
                          <a href="https://lovely-florentine-ef95fa.netlify.app"> <button className='text-center rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                          
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Pizza})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         React JS Application
                      </span>
                      <div className='text-center'>
                          
                          <a href="https://splendid-kashata-d64ac1.netlify.app"> <button className='text-center rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Ikki})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         React JS Application
                      </span>
                      <div className='text-center'>
                          <a href="https://delightful-unicorn-0b33c6.netlify.app"> <button className='text-center rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${tort})  ` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                  <div className='opacity-0 group-hover:opacity-100' >
                      <span className='text-2xl font-bold text-white tracking-wider' >
                         React JS Application
                      </span>
                      <div className='text-center'>
                          <a href="https://resonant-meringue-061871.netlify.app"> <button className='text-center rounded-lg px-4 py-3 m-2 border-white text-gray-700 font-bold text-lg' >Link</button> </a>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Work