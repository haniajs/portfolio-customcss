import Link from "next/link";
import React from "react";
import cssStyle from "./header.module.css";
console.log(cssStyle, "CSS-Style")


export default function Header () {
    return (
        <div>
            <ul className={cssStyle.style}>
                <h1 className={cssStyle.h1}><b>HANIA IRSHAD</b></h1>
                <li className={cssStyle.li}><Link href="/contact"><b>Contact </b></Link></li>
                <li className={cssStyle.li}><Link href="/skills"><b>Skills </b></Link></li>
                <li className={cssStyle.li}><Link href="/projects"><b>Projects </b></Link></li>
                <li className={cssStyle.li}><Link href="/about"><b>About </b></Link></li>
                <li className={cssStyle.li}><Link href="/"><b>Home </b></Link></li>
            </ul>
        </div>
    )
}