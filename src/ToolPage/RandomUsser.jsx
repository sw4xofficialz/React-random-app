import React, { useState } from 'react';
import Navbar from '../comp/Navbar';

const RandomUser = () => {
  const [name, setName] = useState(null);

  const fetchUser = () => {
    fetch('https://random-data-api.com/api/users/random_user')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
        throw new Error('API isteği başarısız oldu.');
      })
      .then(data => setName(data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="flex items-center h-screen justify-center">
 <div className="block">
          {name && (
            <>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
      <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
          <div className="grid grid-cols-1">
            <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
              <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                <img src={name.avatar} alt={name.avatar} className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl" />
                <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{name.username}</p>
                <p className="mt-3 text-base leading-relaxed text-center text-gray-200">number: {name.phone_number}</p>
                <p className="mt-3 text-base leading-relaxed text-center text-gray-200">pass: {name.password}</p>

             
                <div className="w-full mt-6 md:block hidden">
                  <button onClick={fetchUser} className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Generate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
            </>
          )}      <div className="w-full mt-6">
                  <button onClick={fetchUser} className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Generate</button>
                </div>
               </div>
         <div className="flex justify-center mt-4">
    
        <div className="fixed bottom-0 right-0 w-full">
          <Navbar className="w-full" />
        </div>
      </div>
  
      </div>
    </>
  );
};

export default RandomUser;
