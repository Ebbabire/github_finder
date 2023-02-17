import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-[#EE4E34] shadow-xl mb-12 text-primary-content ">
      <div className="container justify-between mx-auto ">
        <div className="flex  align-middle px-2 mx-2">
          <FaGithub className="text-3xl pr-2" />
          <Link to={'/'} className="font-bold text-lg ">
            Github Finder
          </Link>
        </div>
        <div className="flex px-2 mx-2">
          <div className="flex ">
            <Link to={'/'} className="btn btn-ghost btn-sm hover:bg-slate-600">
              Home
            </Link>
            <Link
              to={'/about'}
              className="btn btn-ghost btn-sm rounded-btn hover:bg-slate-600"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
