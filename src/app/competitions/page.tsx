"use client";

import { useState, useEffect } from "react";
import Top from "../../components/top";

export interface Competition {
    title: string;
    category: string;
    ageGroup: string;
    status: string;
    deadline: string;
}

interface Winner {
  name: string;
  competition: string;
  title: string;
  year: number;
}


export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [competitionsData, setAssignments] = useState<Competition[]>([]);
  const [winners, setWinners] = useState<Winner[]>([]);

  const categories = ["All", "Speech", "Creative Writing", "Essay"];
  const ageGroups = ["All", "Middle School", "High School"];


  useEffect(() => {
    fetch("data/competitions.json")
        .then((res) => res.json())
        .then((data: Competition[]) => setAssignments(data));

  fetch("data/pastWinners.json")
    .then((res) => res.json())
    .then((data: Winner[]) => setWinners(data));
  }, []);

  useEffect(() => {
    fetch("data/competitions.json")
      .then((res) => res.json())
      .then((data: Competition[]) => setAssignments(data));
  }, []);

  const filtered = competitionsData.filter((c) => {
    return (
      (selectedCategory === "All" || c.category === selectedCategory) &&
      (selectedAge === "All" || c.ageGroup === selectedAge)
    );
  });

  return (
    <div>
      <Top />
      <div className="min-h-screen bg-[#F9F6F1] text-[#14213D] py-20 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold mb-6">Competitions</h1>
        <p className="max-w-xl text-center mb-10">
          Explore our lineup of competitions in speech, writing, and essay categories. Submit your best work and join a community of aspiring voices.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
                <label className="mb-1 font-semibold text-sm">Filter by Category</label>
                <select
                className="p-2 border border-[#14213D] rounded"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                >
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
                </select>
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-semibold text-sm">Filter by Age Group</label>
                <select
                className="p-2 border border-[#14213D] rounded"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                >
                {ageGroups.map((age) => (
                    <option key={age}>{age}</option>
                ))}
                </select>
            </div>
        </div>


        {/* Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {filtered.map((comp, idx) => (
            <div
              key={idx}
              className="border border-[#14213D] bg-white rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold mb-2">{comp.title}</h2>
              <p className="text-sm mb-1">Category: {comp.category}</p>
              <p className="text-sm mb-1">Age Group: {comp.ageGroup}</p>
              <p className="text-sm mb-1">Status: {comp.status}</p>
              <p className="text-sm">Deadline: {comp.deadline}</p>
            </div>
          ))}
        </div>

        {/* Past Winners Section */}
        <div className="mt-20 w-full max-w-4xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">Past Winners</h3>
            {winners.length > 0 ? (
                <div className="space-y-4">
                {winners.map((winner, idx) => (
                    <div
                    key={idx}
                    className="bg-white border border-[#14213D] rounded-lg p-4"
                    >
                    <p className="font-semibold text-[#2D2D2D]">
                        {winner.name} ({winner.year}) — <span className="italic">"{winner.title}"</span>
                    </p>
                    <p className="text-sm text-gray-700">{winner.competition}</p>
                    </div>
                ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No entries available yet.</p>
            )}
        </div>
      </div>
    </div>
  );
}
