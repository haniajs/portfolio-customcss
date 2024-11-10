import React from "react";
import cssStyle from "./footer.module.css";
console.log(cssStyle, "CSS-Style");

export default function Footer () {
    return (
        <div>
            <h1 className={cssStyle.h1}><b>HANIA IRSHAD | All Rights Reserved 2024</b></h1>
        </div>
    )
}