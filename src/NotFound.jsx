import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightCircleLine } from 'react-icons/ri'
const NotFound = () => {

  return (
    <div className='bg-[#15083E] h-screen flex items-center justify-center'>
 
  <div className="text-center">
       <Link to="/tool" className='text-9xl font-light block'>404</Link>
      <Link  to="/tool" className='text-red-600 text-4xl font-bold' > Page Not Found!!</Link>

  
<br />

<div className="mt-5 text-2xl text-white flex items-center justify-center">
    <Link to="/tool" className='me-2'>Go To Tool  </Link>
    <Link to="/tool" className='text-2xl'><RiArrowRightCircleLine/> </Link>

</div>
      </div>
      </div>
  )
}

export default NotFound
