import React, { useState } from 'react';

const Navbar = () => {
  // สร้างตัวแปร state เพื่อจำว่าเปิดหรือปิดเมนูอยู่
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      <div className="container mx-auto px-6 py-4">
        
        {/* ส่วนหัว: โลโก้ และ ปุ่มเมนูมือถือ */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Farm
          </a>

          {/* Desktop Menu (จะซ่อนเมื่ออยู่บนมือถือ) */}
          <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">หน้าหลัก</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">ผลงาน</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">ติดต่อ</a>
          </div>

          {/* Mobile Menu Button (Hamburger) - จะแสดงเฉพาะบนมือถือ */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                // Icon กากบาท (Close)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Icon ขีดสามเส้น (Hamburger)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (จะเลื่อนลงมาเมื่อกดปุ่ม) */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-100 animate-fade-in-down">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 rounded-lg transition"
            >
              หน้าหลัก
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 rounded-lg transition"
            >
              ผลงาน
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 rounded-lg transition"
            >
              ติดต่อ
            </a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;