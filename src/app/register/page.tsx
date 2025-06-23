"use client";

import { useState } from "react";
import Top from "../../components/top";

export default function RegisterPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

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
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div>
      <Top />
      <div className="min-h-screen bg-[#F9F6F1] text-[#14213D] flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl font-serif font-bold mb-6">Class Registration</h1>
        <p className="max-w-xl text-center mb-10">
          Register for one of our high-quality, small-group workshops. You'll receive expert instruction and personalized feedback from our mentors.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6 border border-[#14213D]"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="classType" className="block mb-2 font-semibold">
              Select Class
            </label>
            <select
              name="classType"
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose a Class</option>
              <option value="Speech Writing">Speech Writing</option>
              <option value="Persuasive Essay">Persuasive Essay</option>
              <option value="Personal Statement">Personal Statement</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14213D] text-white py-2 rounded hover:bg-[#1f2e4d] font-semibold"
          >
            Register
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">Registration successful!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
