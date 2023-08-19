import { Link } from 'react-router-dom';
import { CiHome, CiUser } from 'react-icons/ci';
import { FaTools } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#0a1120] flex items-center justify-center bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)] w-full bg-[length:86.125rem] bg-bottom bg-no-repeat text-white">
      <div className="px-7 bg-[#0a1120] justify-center bg-[url(https://mini.codingcodax.dev/images/dark-beams.jpg)] bg-[length:86.125rem] bg-bottom bg-no-repeat text-white shadow-lg rounded-2xl w-full">
        <div className="flex">
          <div className="flex-1 group">
          <Link to="/tool" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
              <span className="block px-1 pt-1 pb-1">
                <FaTools className="far fa-search text-2xl pt-1 mb-1 block" />
                <span className="block text-xs pb-2">tool</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </Link>
          </div>
          <div className="flex-1 group">
            <Link to="/about" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
              <span className="block px-1 pt-1 pb-1">
                <CiUser className="far fa-compass text-2xl pt-1 mb-1 block" />
                <span className="block text-xs pb-2">About</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </Link>
          </div>
          <div className="flex-1 group">
          <Link to="/" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
              <span className="block px-1 pt-1 pb-1">
                <CiHome className="far fa-home text-2xl pt-1 mb-1 block" />
                <span className="block text-xs pb-2">Home</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
