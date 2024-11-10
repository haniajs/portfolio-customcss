import React from "react";
import Image from "next/image";
import cssStyle from "./projecta.module.css"

export default function Projects () {
    return (
        <div>
             <h1 className={cssStyle.h1}><b>My Projects</b></h1>
             <section className={cssStyle.section}>
                <div>
                    <Image src={"/images/appliances.PNG"} alt="appliances" width={300} height={300}
                    className={cssStyle.image}/>
                    <h2 className={cssStyle.h2}><b>Appliances Website</b></h2>
                </div>

                <div>
                    <Image src={"/images/figma.PNG"} alt="figma" width={300} height={300}
                    className={cssStyle.image}/>
                    <h2 className={cssStyle.h2}><b>Figma Templete</b></h2>
                </div>

                <div>
                    <Image src={"/images/resume.PNG"} alt="resume" width={300} height={300}
                    className={cssStyle.image}/>
                    <h2 className={cssStyle.h2}><b>Resume Builder</b></h2>
                </div>

                <div>
                    <Image src={"/images/website.PNG"} alt="website" width={300} height={300}
                    className={cssStyle.image}/>
                    <h2 className={cssStyle.h2}><b>Next.js Website</b></h2>
                </div>

             </section>
        </div>
    )
}