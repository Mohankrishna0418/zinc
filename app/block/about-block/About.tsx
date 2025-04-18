import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-16 py-10 bg-white dark:bg-[#0A0A0A]  text-black dark:text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#f6e5c8] inline-block">
          About
        </h2>
      </div>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
        {/* Left Card */}
        <div className=" rounded-2xl p-6 shadow-md bg-[#0E1117] w-full lg:w-[390px] flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4">
            <Image
              src="/profile.JPG"
              alt="Jagadish C K"
              fill
              className="rounded-full object-cover border-4 border-[#f6e5c8]"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Mohan Krishna A</h3>
          <ul className="text-left space-y-2 text-sm">
            <li>
              <span className="font-semibold">› Birthday:</span> November 2003
            </li>
            <li>
              <span className="font-semibold">› Phone:</span>{" "}
              <a
                href="tel:+917760181757"
                className=" text-black dark:text-white underline hover:text-orange-400"
              >
                +91 7760181757
              </a>
            </li>
            <li>
              <span className="font-semibold">› City:</span>{" "}
              <span id="location" className=" text-black dark:text-white">
                Karnataka, India
              </span>
            </li>
            <li>
              <span className="font-semibold">› Email:</span>{" "}
              <a
                href="mailto:mohankrishna.a757@gmail.com"
                className=" text-black dark:text-white underline hover:text-orange-400"
              >
                mohankrishna.a757@gmail.com
              </a>
            </li>
          </ul>
          {/* Push bottom if space */}
          <div className="flex-grow" />
        </div>

        {/* Right Card */}
        <div className=" rounded-2xl p-6 shadow-md w-full flex flex-col justify-between bg-[#0E1117]">
          <p className="leading-relaxed px-4 text-[15px] md:text-base text-justify">
            <strong>Greetings,</strong>
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;