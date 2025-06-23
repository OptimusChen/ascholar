import * as React from 'react';
import { useState } from "react";
import Image from "next/image";

function Top() {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-30 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 shadow-md bg-[#14213D] relative">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <Image src="/ascholar-logo.png" alt="Logo" width={60} height={60} />
          <a href="/" className="hover:text-[#C9A66B] text-2xl md:text-3xl font-serif text-white" onClick={() => setNavOpen(false)}>AScholar</a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none absolute right-4 top-4"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        {/* Nav menu */}
        <nav
          className={`
            flex-col space-y-2 text-sm font-medium text-[#14213D] bg-[#F9F6F1] rounded shadow-md
            absolute left-0 right-0 top-full mt-2 px-4 py-4 z-20
            ${navOpen ? "flex" : "hidden"}
            md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:shadow-none md:rounded-none md:mt-0 md:px-0 md:py-0 md:text-white
          `}
        >
          <a href="/" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>HOME</a>
          <a href="/register" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>REGISTER</a>
          <a href="/competitions" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>COMPETITIONS</a>
          {/* <a href="/classes" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>CLASSES</a> */}
          <a href="/founder" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>FOUNDER</a>
        </nav>
      </header>
    </div>
  );
}

export default Top;