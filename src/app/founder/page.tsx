"use client";

import Image from "next/image";
import Top from "../../components/top";

export default function FounderPage() {
  return (
    <div>
       <Top /> 

       <div className="min-h-screen bg-[#F9F6F1] text-[#14213D] py-20 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold mb-6">Meet the Founder</h1>
        <p className="max-w-xl text-center mb-12">
            Behind every voice is a story worth telling. Learn more about our founder and the vision that inspired AScholar.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
            <Image
            src="/founder.jpg"
            alt="Founder Portrait"
            width={200}
            height={200}
            className="rounded-full object-cover"
            />
            <div>
            <h2 className="text-2xl font-serif font-bold mb-4">A Note from Our Founder</h2>
            <p className="text-lg mb-4">
                As a writer and speech coach, I’ve seen firsthand how transformative a strong voice can be. I created AScholar to give young minds the tools, mentorship, and stage to express themselves with clarity, purpose, and passion.
            </p>
            <p className="text-lg">
                My mission is to empower students not only to compete — but to create, to connect, and to lead with their words.
            </p>
            </div>
        </div>
        </div>
    </div>
  );
}
