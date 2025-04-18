// components/ContactBlock.tsx
import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-[#0A0A0A]  min-h-screen flex flex-col font-inter mt-2">
      <header className="bg-[#0E1117] rounded-xl px-6 py-3 w-full">
        <nav className="max-w-5xl mx-auto flex justify-center items-center gap-2">
          <span className="text-[#f5d9b6] text-3xl font-bold">Contact</span>
        </nav>
      </header>

      <main className="flex-grow flex justify-center items-start pt-10 px-4">
        <form
          className="bg-[#0E1117] rounded-3xl max-w-2xl w-full p-8 flex flex-col gap-4"
          aria-label="Contact form"
        >
          <h2 className="text-[#f5d9b6] font-semibold text-center mb-4">
            Get In Touch
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#f5d9b6] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#f5d9b6] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#f5d9b6] focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#f5d9b6] resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#464a4f] text-[#f5d9b6] font-semibold tracking-widest rounded-full py-2 px-10 mx-auto mt-2 hover:bg-[#8a8c8c] transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;