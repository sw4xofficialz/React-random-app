import React, { useState } from 'react';
import Navbar from '../comp/Navbar';

const UrlScan = () => {
  const [name, setName] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = () => {
    fetch('https://urlscan.io/api/v1/search/?q=domain:' + query)
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
    <div className="justify-center text-center p-7">
      <input
        type="text"
        placeholder='url example: github.com'
        value={query}
        onChange={e => setQuery(e.target.value)}
        class="bg-purple-white shadow rounded border-0 p-3"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchData();
          }
        }}
      />   
       <button onClick={fetchData} className='bg-blue-700 text-white transition-all duration-100 hover:scale-110 hover:bg-blue-800 p-3 ms-1 rounded'>Verileri Getir</button>
 </div>
      
          {name && (
            <>


<div className="flex justify-center scrol">
  <div className="w-full max-w-lg bg-black rounded-lg">
    <div className="p-4 text-white">
<h1>{name.result.page.domain}</h1>
    </div>
  </div>
</div>
   
            </>
          )}  
    {!name && (
        <div className="flex justify-center mt-4">
          <h3  className='bg-red-700 text-white transition-all duration-100 hover:scale-110 hover:bg-red-800 p-3 ms-1 rounded'>! limited web site</h3>
        </div>
      )}
      <div className="flex justify-center mt-4">
    
    <div className="fixed bottom-0 right-0 w-full">
      <Navbar className="w-full" />
    </div>
  </div>
    </>
  );
};
export default UrlScan;
