import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tool from './Page/Tool';
import Contact from './Page/contact';
import About from './Page/About';
import Home from './Page/Home';
import NotFound from './NotFound';
import RandomUsser from './ToolPage/RandomUsser';
import Zip from './ToolPage/Zip';
import ZipTr from './ToolPage/ZipTr';
import UrlScan from './ToolPage/UrlScan';
const App = () => {
  return (
    <BrowserRouter>

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tool/random-ussername" element={<RandomUsser />} />
          <Route path="/tool/zip" element={<Zip />} />
          <Route path="/tool/Zip-tr" element={<ZipTr />} />
          <Route path="/tool/site-screenshoot" element={<UrlScan />} />
          <Route path="*" element={<NotFound />} /> 

 
        </Routes>

      
</BrowserRouter>
  
  );
};

export default App;
