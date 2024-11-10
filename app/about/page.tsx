import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import Link from "next/link";
import cssStyle from "./about.module.css";
console.log(cssStyle, "CSS-Style");


export default function About () {
    return (
        <div>
            <Header></Header>
            <div className={cssStyle.div}>
            <h1 className={cssStyle.h1}><b>About Us</b></h1>
            <p className={cssStyle.p}>Hello, 
                my name is Hania Irshad, and I am currently learning at GIAIC (Governor 
                sindh initiative for cloud applied generative AI). I am passionate about developing my skills in artificial 
                intelligence, machine learning, and advanced computing technologies. Through my studies at GIAIC,
                I am gaining valuable knowledge in the fields of computer science, programing languages,
                and artificial intelligence. I am excited to apply what I learn to real-world challenges 
                and contribute to innovations that can shape the future of technology. I am committed to
                continuous growth and look forward to collaborating with like-minded individuals in this
                ever-evolving field.</p>
                <Link href={"/contact"}><button className={cssStyle.button}>Contact Us</button></Link>
            </div>
                <Footer></Footer>
        </div>
    )
}