import React from "react";
import Image from "next/image";
import cssStyle from "./hero.module.css";
import Link from "next/link";
console.log(cssStyle, "CSS-Style");

export default function Hero () {
    return (
        <div>
            <section className={cssStyle.section}>
        <div>
          <h1 className={cssStyle.h1}><b>Hello! I Am Hania Irshad</b></h1>
          <p className={cssStyle.para}>Hello, my name is Hania Irshad, and I am currently learning at GIAIC
            <br /> (Governor sindh initiative for cloud applied generative AI).I am gaining
            <br /> valuable knowledge in the fields of computer science, programing 
            <br />languages,and artificial intelligence.</p>
            <Link href={"/about"}><button className={cssStyle.button}>Learn More</button></Link>
        </div>
        <div className={cssStyle.div}>
          <Image src={"/images/mypic.PNG"} alt="my_picture" width={300} height={300}/>
        </div>
      </section>
        </div>
    )
}