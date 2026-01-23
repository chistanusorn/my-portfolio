import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-6"></h3>
        <p className="mb-8 text-slate-400"></p>
        
        {/* ส่วนข้อมูลติดต่อที่ปรับปรุงใหม่ */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8">
          
          {/* 1. Facebook */}
          <a 
            href="https://www.facebook.com/wow.ubon?locale=th_TH" //
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </a>

          {/* 2. Gmail */}
          <a 
            href="mailto:khitanuson.farm@gmail.com" 
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            khitanuson.farm@gmail.com
          </a>

          {/* 3. Phone */}
          <a 
            href="tel:0996431023" 
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            099-643-1023
          </a>

        </div>
        
        <div className="border-t border-slate-800 pt-8 text-sm">
          <p>&copy; My Portfolio. Crafted with perfection.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;