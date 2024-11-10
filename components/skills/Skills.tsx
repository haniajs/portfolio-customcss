import React from "react";
import Link from "next/link";
import cssStyle from "./skills.module.css";
console.log(cssStyle, "CSS-Style");

export default function Skills () {
    return (
        <div className={cssStyle.div}>
                <h1 className={cssStyle.h1}><b>My Skills</b></h1>
                <h1 className={cssStyle.heading}><b>Technologies I Works With</b></h1>
                <p className={cssStyle.p}> Hello, my name is Hania Irshad,
                     and I am passionate about computer science and technology. I am 
                     currently learning next.js and tailwind css in GIAIC.Through my studies at GIAIC,
                 I am gaining valuable knowledge in the fields of computer science, programing languages,
                  and artificial intelligence. I am excited to apply what I learn to real-world challenges 
                  and contribute to innovations that can shape the future of technology.I have experience
                   in web development, particularly in building responsive and user-friendly websites. 
                   I am proficient in front-end technologies such as HTML, CSS, TypeScript, and frameworks.I 
                   am good for these languages.</p>
                   <Link href={"/contact"}><button className={cssStyle.button}>
                Contact-Us</button></Link>
            </div>
    )
}