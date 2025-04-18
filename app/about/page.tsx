import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-6 sm:py-10">
        <NavBar />
      </div>

      <div>
        <section className="container mx-auto py-4 sm:py-6">
          <div className="flex flex-col gap-6 sm:gap-9">
            <h1 className="text-3xl sm:text-4xl font-bold">🧑‍💻 About Me</h1>

            {/* Personal Card */}
            <div className="rounded-lg border p-4 sm:p-8 hover:border-foreground/20 transition-all">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Life Beyond Code
              </h2>
              <div className="prose prose-sm sm:prose-lg max-w-none text-foreground/80 space-y-4">
                <p>
                  When I&apos;m not building full-stack experiences, I&apos;m
                  chasing stories, strategy, and sprints.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <p>
                      Nicholas Sparks novels help me slow down and stay
                      grounded—proof that emotional depth never goes out of
                      style.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏏</span>
                    <p>
                      Test cricket keeps my logic sharp. Five days of
                      high-stakes patience? It&apos;s basically backend
                      engineering with breaks for tea.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏃‍♂️</span>
                    <p>
                      Short runs reset my brain. Code bugs don&apos;t stand a
                      chance after 2km of thinking on my feet.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎧</span>
                    <p>
                      Music is my silent co-founder—lo-fi for focus, tempo for
                      momentum, always there, always in sync.
                    </p>
                  </div>
                </div>

                <p className="mt-4 sm:mt-6">
                  In the spaces between, I tinker, tweak, and optimize
                  systems—digital or otherwise. Big on clean code, clear
                  thinking, and the kind of craft that outlives trends.
                </p>
              </div>
            </div>

            {/* Learning Card */}
            <div className="rounded-lg border p-4 sm:p-8 hover:border-foreground/20 transition-all">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                🔧 Currently Learning
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 mb-4">
                Always shipping, always sharpening. Right now, I&apos;m getting
                my hands dirty with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 p-3 rounded-md bg-foreground/5">
                  <span className="text-xl sm:text-2xl">⚙️</span>
                  <p className="text-sm sm:text-base text-foreground/80">
                    Node.js + Hono.js for blazing-fast APIs
                  </p>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-md bg-foreground/5">
                  <span className="text-xl sm:text-2xl">🛠️</span>
                  <p className="text-sm sm:text-base text-foreground/80">
                    Prisma + NeonDB/Supabase for modern database flows
                  </p>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-md bg-foreground/5">
                  <span className="text-xl sm:text-2xl">🖼️</span>
                  <p className="text-sm sm:text-base text-foreground/80">
                    Next.js, Tailwind CSS, Radix UI for building smooth,
                    scalable UIs
                  </p>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-md bg-foreground/5">
                  <span className="text-xl sm:text-2xl">🔄</span>
                  <p className="text-sm sm:text-base text-foreground/80">
                    CI/CD with Docker, GitHub Actions & Azure (DevOps is not
                    optional)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto mt-auto">
        <Footer />
      </div>
    </div>
  );
}