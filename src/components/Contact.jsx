import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-900 flex justify-center items-center p-4'  >
        <form method='POST' action="https://getform.io/f/81eac193-1e98-4648-aa80-25386bf45176" className='flex flex-col max-w-[600px] w-full' >
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-red-800 text-gray-300' > Contact </p>
                  
                  <p className='text-gray-300 py-4' >Submit the form below or shoot me an email - my emaill@mail.com</p>
               
            </div>
            <input type="text" className='bg-white p-2' placeholder='Nmae' name='name'  />
            <input type="email"  className='bg-white my-4 p-2' placeholder='Email' name='eamil' />
            <textarea name="message"  rows="10" placeholder='Message' className='bg-white p-2' ></textarea>
            <button className='text-white border-2 hover:bg-red-800 hover:border-red-800 px-4 py-2 my-8 mx-auto flex items-center' >Lets Collaborate</button>
        </form>
    </div>
  )
}

export default Contact