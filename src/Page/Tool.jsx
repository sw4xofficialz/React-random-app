import React, { useState } from 'react';
import ToolList from '../comp/ToolList';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
const Tool = () => {
  const [query, setQuery] = useState('');

  const filteredList = ToolList.filter(
    (item) => item.header.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='bg-[#0a1120] h-full bg-fixed bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)]  bg-[length:86.125rem] bg-bottom bg-no-repeat '>
      <div className="  p-10 text-center flex justify-center h-56 items-center">
      <Link to="/" className='text-4xl text-indigo-800 hover:text-indigo-950'><BsFillArrowLeftCircleFill /></Link>
      <form>
   <h3 className='text-4xl font-extrabold text-white p-5 mb-3'>Hi wellcome tool page</h3>


      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search tool"
          required
          onChange={(e) => setQuery(e.target.value)}
          autoComplete='off'
        />
   
      </div>
    </form>

      </div>
         <div className="overflow-hidden">
              
      <ul className='list-none text-center items-center justify-center'>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (

            <div className="card p-5 m-2 overflow-hidden ">
              
              <div key={index} className="border-blue-700 border hover:border-none bg-black hover:bg-black hover:scale-110 hover:rounded-2xl duration-100 transition-all p-4 text-center justify-center items-center rounded-lg md:flex block ">
             <Link to={item.link }> <h1 className='text-white bg-transparent backdrop:blur-md p-2 font-extrabold md:mb-0 mb-2'>{item.header} &nbsp; </h1>
              <div className="p text-white/50 font-medium ">
                <p>{item.paragraph}</p>
                
              </div></Link>
</div> 


            </div>
  
          ))
        ) : (
          <li className='text-4xl font-bold text-white'>Not Found Page <strong>"{query}"</strong> </li>
        )}
      </ul>
         
    </div>
     </div>
  )
}

export default Tool