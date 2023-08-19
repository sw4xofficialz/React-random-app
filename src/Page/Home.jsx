import React from 'react'
import { FaPhoneAlt, FaSistrix } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
        
    <div className='bg-[#0a1120] h-screen bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)] bg-[length:86.125rem] bg-bottom bg-no-repeat'>
 <div className="md:p-10 p-2 h-screen 
">



  <div className="container-fluid md:flex ">
 


 
  </div>
  <div className="bg"></div>
  <div className="top-24 text-center  md:top-40 relative  ">
<div className="text">
<h1 className='md:text-4xl font-bold  text-4xl text-white'>QuantumSpark: Ignite Your Creativity with Random Tools<br />  like Password Generator and More!👀👀 </h1>
</div>


<div className="paragraph mt-6 p-4 ">
  <p className='text-md text-indigo-600 font-semibold '>You are presented with a website that has a fast and sleek design,<br />  catering to the tastes and needs of everyone.</p>

<div className="flex justify-center ">
<Link to="/About" className='bg-none items-center text-indigo-700 m-2 hover:bg-blue-600 hover:text-white hover:scale-90 duration-100 transition-all hover:border-none shadow-lg text-2xl border-solid border px-7 py-2 mt-6 border-indigo-700 rounded-full flex place-content-center'><RiUserSearchLine></RiUserSearchLine> &nbsp; About</Link>

<Link to="/Contact" className='bg-none items-center text-indigo-700 m-2 hover:bg-blue-600 hover:text-white hover:scale-90 duration-100 transition-all hover:border-none shadow-lg text-2xl border-solid border px-7 py-2 mt-6 border-indigo-700 rounded-full place-content-center flex'><FaPhoneAlt></FaPhoneAlt> &nbsp; Contact</Link>

</div>
<div className="justify-center flex">
<Link to="/tool" className='bg-none items-center text-indigo-700 m-2 hover:bg-blue-600 hover:text-white hover:scale-90 duration-100 transition-all hover:border-none shadow-lg text-2xl border-solid border px-3 py-2 mt-6 border-indigo-700 rounded-full  flex place-content-center'><FaSistrix></FaSistrix> &nbsp; All Tools</Link>
</div>
</div>
 
 </div>
     </div>

  
   </div>


  )
}

export default Home
