import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";
import React from "react";

export default function HomePage () {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}