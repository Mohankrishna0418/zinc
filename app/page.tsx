import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const RootPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="container mx-auto py-6 sm:py-10">
          <NavBar />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto py-4 sm:py-5">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi, I&apos;m Mohan Krishna A 👋
              <span className="text-xl sm:text-3xl md:text-3xl block mt-3 sm:mt-4 text-foreground/60">
                Full Stack AI Developer Intern @{" "}
                <LinkPreview
                  url="https://stacklane.co"
                >
                  <span className="text-blue-500">StackLane</span>
                </LinkPreview>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/60">
              I craft digital experiences with modern technologies.
              <br />
              Passionate about building scalable applications and creating
              intuitive user interfaces.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-fit">
              <Button size={{ initial: "2", sm: "3" }} variant="solid" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                size={{ initial: "2", sm: "3" }}
                variant="outline"
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              What I Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-4 text-justify sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Frontend Engineering
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Designing scalable, accessible UIs using a cutting-edge stack
                  centered around Next.js, TypeScript, and Radix UI—built for
                  performance, aesthetics, and clean code.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Stack:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Next.js</li>
                    <li>• React</li>
                    <li>• Tailwind CSS</li>
                    <li>• Radix UI</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Deliverables:</p>
                  <p className="text-sm text-foreground/60">
                    Crafting responsive design systems, theme-aware components,
                    and user-friendly flows optimized for performance and
                    usability.
                  </p>
                </div>
              </div>

              <div className="p-4 text-justify sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Backend Infrastructure
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Building fast, modular backend APIs using Hono.js, PostgreSQL,
                  and Prisma—powered by REST architecture and cloud-first
                  principles.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Stack:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Hono.js</li>
                    <li>• Prisma ORM</li>
                    <li>• RESTful APIs</li>
                    <li>• Supabase</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Deliverables:</p>
                  <p className="text-sm text-foreground/60">
                    Designing scalable data models, integrating cloud storage,
                    and delivering production-grade APIs with auth and
                    performance in mind.
                  </p>
                </div>
              </div>

              <div className="text-justify p-4 sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Development Tools
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Managing modern developer workflows with Git, automated CI/CD
                  pipelines, and deployment strategies using cloud platforms.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Git & GitHub</li>
                    <li>• CI/CD Pipelines</li>
                    <li>• Docker & Azure</li>
                    <li>• Testing Frameworks</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Expertise:</p>
                  <p className="text-sm text-foreground/60">
                    Setting up continuous delivery, handling version control,
                    and ensuring code quality through testing and automation
                    pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Button
                variant="outline"
                size={{ initial: "2", sm: "3" }}
                asChild
              >
                <Link href="/skills">View Skills →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Featured Projects
              </h2>
              <Button variant="ghost" size={{ initial: "2", sm: "3" }} asChild>
                <Link href="/projects">View All Projects →</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">

              {/* Project 2: Placeholder */}
              <div className="group relative rounded-lg border p-4 sm:p-6 transition-all hover:border-foreground/20">
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  <Link
                    href="https://hackernews.lemonisland-20d31e0a.centralindia.azurecontainerapps.io/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400"
                  >
                    HackerNews Backend Clone 🌐
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-9">
                  A robust backend service replicating the functionality of
                  HackerNews. It features secure JWT-based authentication,
                  PostgreSQL database integration with Prisma ORM, and full
                  CI/CD automation, GitHub Actions workflows, and Azure cloud
                  deployment pipelines.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-foreground/40">
                  <span>Node.js</span>
                  <span>•</span>
                  <span>Hono.js</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>PostgreSQL</span>
                  <span>•</span>
                  <span>Prisma</span>
                  <span>•</span>
                  <span>Docker</span>
                  <span>•</span>
                  <span>Azure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <div className="text-center max-w-2xl mx-auto px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm sm:text-base text-foreground/60 mb-6 sm:mb-8">
                I&apos;m always interested in hearing about new projects,
                opportunities.
              </p>
              
            </div>
          </div>
        </section>

        <div className="container mx-auto mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootPage;