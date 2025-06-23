"use client";

import Top from "../components/top";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#2D2D2D] bg-[#F9F6F1]">
      <Top />

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
              href="/competitions"
              className="bg-[#C9A66B] hover:bg-[#b08a4b] text-[#14213D] font-semibold px-6 py-2 rounded-full"
            >
              View Competitions
            </a>
            <a
              href="/register"
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
