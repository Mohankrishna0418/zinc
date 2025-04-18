"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// Import SVG components
import { ReactSVG } from "@/assets/svgs/React";
import { NodeSVG } from "@/assets/svgs/Node";
import { PrismaSVG } from "@/assets/svgs/Prisma";
import { TypeScriptSVG } from "@/assets/svgs/Typescript";
import { FirebaseSVG } from "@/assets/svgs/Firebase";
import { SupabaseSVG } from "@/assets/svgs/Supabase";
import { TailwindSVG } from "@/assets/svgs/TailwindCSS";
import { PostgresSVG } from "@/assets/svgs/PostgreSQL";
import { PostmanSVG } from "@/assets/svgs/Postman";
import { DockerSVG } from "@/assets/svgs/Docker";
import { GitHubSVG } from "@/assets/svgs/Github";
import { GitSVG } from "@/assets/svgs/Git";
import { AzureSVG } from "@/assets/svgs/Azure";
import { VercelSVG } from "@/assets/svgs/Vercel";

const SkillsPage = () => {
  const skills = [
    {
      title: "React",
      Icon: ReactSVG,
      link: "https://reactjs.org",
    },
    {
      title: "Node.js",
      Icon: NodeSVG,
      link: "https://nodejs.org",
    },
    {
      title: "Prisma",
      Icon: PrismaSVG,
      link: "https://www.prisma.io/",
    },
    {
      title: "TypeScript",
      Icon: TypeScriptSVG,
      link: "https://www.typescriptlang.org",
    },
    {
      title: "Firebase",
      Icon: FirebaseSVG,
      link: "https://firebase.google.com/",
    },
    {
      title: "Supabase",
      Icon: SupabaseSVG,
      link: "https://supabase.com",
    },
    {
      title: "Tailwind CSS",
      Icon: TailwindSVG,
      link: "https://tailwindcss.com",
    },
    {
      title: "PostgreSQL",
      Icon: PostgresSVG,
      link: "https://www.postgresql.org",
    },
    {
      title: "Postman",
      Icon: PostmanSVG,
      link: "https://www.postman.com",
    },
    {
      title: "Docker",
      Icon: DockerSVG,
      link: "https://www.docker.com/",
    },
    {
      title: "GitHub",
      Icon: GitHubSVG,
      link: "https://github.com",
    },
    {
      title: "Git",
      Icon: GitSVG,
      link: "https://git-scm.com",
    },
    {
      title: "Azure",
      Icon: AzureSVG,
      link: "https://azure.microsoft.com/en-us/",
    },
    {
      title: "Vercel",
      Icon: VercelSVG,
      link: "https://vercel.com",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container p-50 mx-auto py-10">
        <NavBar />
      </div>

      <div className="container p-50 mx-auto py-0">
        <h1 className="text-4xl sm:text-4xl font-bold mb-10">
          🛠️ Skills & Tools
        </h1>
        <HoverEffect items={skills} />
      </div>

      <div className="container p-50 mx-auto sticky py-0 mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default SkillsPage;