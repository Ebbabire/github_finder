import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center p-6 bg-slate-100 shadow-lg  text-neutral-content ">
      <div className="flex flex-col items-center">
        <FaGithub className="text-4xl mb-2" />
        <div>
          <p className="text-md font-medium">
            Copyright &copy; {year} All rights resereved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
