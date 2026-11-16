import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home } from "@/sections/Home";
import { profile } from "@/data/portfolio";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";
import { Skills } from "@/sections/Skills";

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: reduceMotion,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 pb-24">
        <Home />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="mx-auto w-full max-w-4xl px-6 pb-10">
        <p className="border-t pt-5 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
