import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logotp2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-bold transition-all duration-300"
      : "text-slate-500 hover:text-gray-300 transition-all duration-300";

  return (
    <nav className="w-full bg-black py-4 sticky top-0 z-50 border-b border-gray-900 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} alt="Logo ThazzPedia" className="w-12 md:w-15" />
          </Link>
          <span className="text-[24px] md:text-[30px] font-bold text-white font-poppins">
            ThazzPedia
          </span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[14px] italic underline font-poppins">
          <NavLink to="/" end className={linkStyle}>Beranda</NavLink>
          <NavLink to="/games" className={linkStyle}>Game Lainnya</NavLink>
          <NavLink to="/history" className={linkStyle}>Riwayat Transaksi</NavLink>
          <NavLink to="/admin" className={linkStyle}>Admin</NavLink>
          <a 
            href="https://wa.me/6285964345477" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-gray-300 transition-all duration-300"
          >Hubungi Saya</a>
        </div>

        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none p-2 border border-gray-700 rounded-lg bg-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col bg-gray-900 border-t border-gray-800 px-6 py-4 gap-4 text-[14px] italic underline font-poppins shadow-xl">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={linkStyle}>Beranda</NavLink>
          <NavLink to="/games" onClick={() => setIsOpen(false)} className={linkStyle}>Game Lainnya</NavLink>
          <NavLink to="/history" onClick={() => setIsOpen(false)} className={linkStyle}>Riwayat Transaksi</NavLink>
          <NavLink to="/admin" onClick={() => setIsOpen(false)} className={linkStyle}>Admin</NavLink>
          <a 
            href="https://wa.me/6285964345477" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-500 hover:text-gray-300"
          >Hubungi Saya</a>
        </div>
      )}
    </nav>
  );
}