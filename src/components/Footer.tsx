const Footer = () => {
    return (
      <footer className="w-full bg-black backdrop-blur-xl p-2 rounded-t-lg shadow-sm border-t border-white/10 flex flex-col items-center text-gray-300">
        <p className="text-xs font-light tracking-wide">Designed & Developed by Pratiksha 💛</p>
        <div className="flex gap-3 mt-1 text-[10px]">
          <a href="#" className="hover:text-white transition duration-300 ease-in-out">Privacy</a>
          <a href="#" className="hover:text-white transition duration-300 ease-in-out">Terms</a>
          <a href="#" className="hover:text-white transition duration-300 ease-in-out">Contact</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  