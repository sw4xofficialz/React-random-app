import React from "react"
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
function About() {

  return (
    <div className="items-center justify-center flex bg-[#0a1120] h-screen bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)] bg-[length:86.125rem] bg-bottom bg-no-repeat">

<div className="flex items-center bg-black p-6 rounded-lg">
<div className="float-right ">
<h1 className='font-extrabold text-4xl text-blue-800 '>About Us</h1></div>
<br />
<hr className="bg-indigo-800"/>
<div className="w-full p-4">
<p className='text-white text-sm'>Hello! We are <strong>QuantumSpark</strong>, a website that offers unique, fun, and innovative experiences, far from the ordinary.

Our goal is to help our users break free from their daily routines and explore new experiences by providing them with random content in various categories.

On our website, you can generate random numbers, words, colors, images, quotes, songs, and much more. With just a click, you can obtain exciting and unexpected things.

Our team is constantly adding new features and categories to provide our users with the best experience possible. We value user feedback and make improvements based on their suggestions.

Our aim is to provide you with a enjoyable and entertaining experience. Feel free to push the boundaries and enjoy the randomness of our world!

If you have any questions or suggestions, please don't hesitate to reach out to us. We would be happy to assist you.</p>
<br />
<hr className="bg-indigo-800"/>

<div className="flex float-right">

<Link to="/" className='text-4xl text-white mt-5 m-2'>    <BsFillArrowLeftCircleFill className='text-4xl  text-white hover:text-indigo-900 duration-100 transition-all hover:scale-120'></BsFillArrowLeftCircleFill></Link>
</div>
    </div></div></div>
  )
}

export default About