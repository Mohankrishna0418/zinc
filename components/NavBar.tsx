"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const NavBar = (props: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={
        "nav-container mx-auto border-b border-foreground/10 pt-0 pb-4 p-2" +
        (props.className ? props.className : "")
      }
    >
      <div className="top-nav-container">
        <Flex align="center" justify="between" py="4">
          <Link href="/" className="group relative inline-block">
            <Heading
              size={{ initial: "6", sm: "7" }}
              weight="bold"
              className="text-foreground"
            >
              Mohan
            </Heading>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              radius="full"
            >
              {mounted ? (
                theme === "dark" ? (
                  <SunIcon width="22" height="22" />
                ) : (
                  <MoonIcon width="22" height="22" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile menu button - only visible on small screens */}
            <div className="block sm:hidden">
              <Button
                variant="ghost"
                size="2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <Cross1Icon width="22" height="22" />
                ) : (
                  <HamburgerMenuIcon width="22" height="22" />
                )}
              </Button>
            </div>
          </div>
        </Flex>
      </div>

      {/* Navigation menu - hidden on mobile when menu is closed, always visible on sm and up */}
      <div
        className={`nav-menu ${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-start sm:items-center lg:gap-8 gap-2 text-md`}
      >
        <Link
          href="/about"
          className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>

        <Link
          href="/skills"
          className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          Skills
        </Link>

        <Link
          href="/projects"
          className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default NavBar;