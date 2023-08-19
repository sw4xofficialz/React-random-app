import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { TbAlertSquareRoundedFilled } from 'react-icons/tb'

const contact = () => {
  return ( 
<div className='items-center justify-center flex bg-[#0a1120] h-screen bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)] bg-[length:86.125rem] bg-bottom bg-no-repeat'>

<div className="flex flex-col items-center">
    

      <div className="bg-black w-[90%] md:w-[100%] h-full p-8 rounded-lg shadow-lg">
        <div className="">
        <h2 className="text-indigo-800 text-2xl font-extrabold mb-6">
       Contact Information</h2>
    
  <div className="md:flex inline justify-between">
  <div className="mb-4">
          <label htmlFor="email" className="text-white/40 mb-4">Email</label> <br />
          <Link className="text-indigo-800 font-bold">alozzers@gmail.com</Link>
        </div>

        <div className="mb-4 ">
          <label htmlFor="email" className="text-white/40  md:float-right float-left">Phone</label>
         <br />  <Link  className="text-blue-700 font-bold " to="https://wa.me/15312207362">+1 (531) 220-7362</Link>
        </div>
    </div>    
  
        <div className="mb-4 mt-3">
            <div className="flex items-center">
                <TbAlertSquareRoundedFilled className='text-red-600'/>
          <label htmlFor="message" className="text-red-600 ">&nbsp;System message</label>
       </div> 
          <p className="text-gray-700">Please inform us about any errors, deficiencies, and things you would  like to be<br /> added to our website through our contact address. 😊</p>
    
        </div>
  
    <div className="flex justify-center items-center float-right">

<Link to="/" className='text-4xl text-white mt-5 m-2'>   <BsFillArrowLeftCircleFill className='text-4xl  text-white hover:text-indigo-900 duration-100 transition-all hover:scale-120'></BsFillArrowLeftCircleFill></Link>
</div>
    </div>
</div></div>
</div>

  )
}

export default contact
