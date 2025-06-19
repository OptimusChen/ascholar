"use client";

import { useState } from "react";
import Image from "next/image";

export default function MainPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#2D2D2D] bg-[#F9F6F1]">
      {/* Header */}
      <header className="sticky top-0 z-30 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 shadow-md bg-[#14213D] relative">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <Image src="/ascholar-logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl md:text-3xl font-serif text-white">AScholar</h1>
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
          <a href="#about" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>ABOUT US</a>
          <a href="#competitions" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>COMPETITIONS</a>
          <a href="#classes" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>CLASSES</a>
          <a href="#founder" className="hover:text-[#C9A66B]" onClick={() => setNavOpen(false)}>FOUNDER</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden px-2">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: "url('/pencil-background.jpg')" }}
          aria-hidden="true"
        />
       <div className="relative z-10 flex flex-col items-center text-[#14213D] bg-white/80 p-6 rounded-xl shadow-xl">
          <h2 className="text-4xl font-serif font-bold leading-snug mb-4">
            Cultivating the voices<br className="hidden sm:block" /> that shape tomorrow.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
            <a
              href="#competitions"
              className="bg-[#C9A66B] hover:bg-[#b08a4b] text-[#14213D] font-semibold px-6 py-2 rounded-full"
            >
              View Competitions
            </a>
            <a
              href="#classes"
              className="border border-[#C9A66B] bg-white hover:bg-[#C9A66B] text-[#14213D] font-semibold px-6 py-2 rounded-full"
            >
              Register for Classes
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-serif font-bold mb-6 text-[#14213D]">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#14213D]">
          Our mission is to cultivate authentic voice through competitive and creative excellence in
          English, writing, and speech. We empower students through high-quality mentorship,
          competitions, and intimate classes built around community and personalized feedback.
        </p>
      </section>

      {/* Competitions Showcase */}
      <section id="competitions" className="py-20 px-6 md:px-20 bg-[#F9F6F1]">
        <h3 className="text-3xl font-serif font-bold mb-6 text-[#14213D] text-center">Competitions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="border border-[#14213D] rounded-lg p-6 bg-white hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-2 text-[#14213D]">Competition Title {i + 1}</h4>
              <p className="text-sm mb-1">Category: Speech</p>
              <p className="text-sm mb-1">Status: Open</p>
              <p className="text-sm">Deadline: July 31</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-serif font-bold mb-6 text-[#14213D]">Workshops & Classes</h3>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-[#14213D]">
          Small group sessions focused on persuasive writing, speech coaching, and college essay development.
          Built for students who want real feedback from expert mentors.
        </p>
        <form
        className="flex flex-col items-center gap-4 mt-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;

          const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            classType: (form.elements.namedItem("classType") as HTMLSelectElement).value,
          };

          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (res.ok) {
            alert("Registration submitted!");
            form.reset();
          } else {
            alert("Something went wrong.");
          }
        }}
      >
        <input name="name" required placeholder="Your Name" className="border p-2 rounded w-64" />
        <input name="email" required type="email" placeholder="Email" className="border p-2 rounded w-64" />
        <select name="classType" required className="border p-2 rounded w-64">
          <option value="">Choose a Class</option>
          <option value="Speech Writing">Speech Writing</option>
          <option value="Persuasive Essay">Persuasive Essay</option>
          <option value="Personal Statement">Personal Statement</option>
        </select>
        <button type="submit" className="bg-[#14213D] text-white px-6 py-2 rounded-full hover:bg-[#1f2e4d]">
          Register
        </button>
      </form>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10">
        <Image src="/founder.jpg" alt="Founder" width={200} height={200} className="rounded-full" />
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#14213D]">A Note from Our Founder</h3>
          <p className="text-lg max-w-xl text-[#14213D]">
            As a writer and speech coach, I’ve seen how powerful a strong voice can be. This program was
            created to give students the tools, space, and confidence to tell their stories and advocate for
            their ideas.
          </p>
        </div>
      </section>

      {/* Poster Image */}
      <section className="w-full mt-12 flex justify-center">
        <img
          src="/poster-image.jpg"
          alt="AScholar Poster"
          className="w-[300px] md:w-[500px] h-auto"
        />
      </section>

      {/* Footer */}
      <footer className="py-10 mt-20 px-8 text-center text-sm text-white bg-[#14213D] relative">
        <div className="mb-4 space-x-4">
          <a href="#" className="hover:text-[#C9A66B]">Privacy Policy</a>
          <a href="#" className="hover:text-[#C9A66B]">FAQs</a>
          <a href="#" className="hover:text-[#C9A66B]">Contact</a>
        </div>
        <div className="opacity-10 text-6xl absolute bottom-2 right-2 select-none pointer-events-none">
          AScholar
        </div>
        <p>&copy; {new Date().getFullYear()} AScholar. All rights reserved.</p>
      </footer>
    </div>
  );
}
