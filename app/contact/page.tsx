import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import Link from "next/link";
import cssStyle from "./contact.module.css";
console.log(cssStyle, "CSS-Style");

export default function Contact () {
    return (
        <div className={cssStyle.body}>
            <Header></Header>
            <h1 className={cssStyle.h1}><b>Contact Us</b></h1>
            <section className={cssStyle.section}>
                <div className={cssStyle.div}>
                <form>
     <label className={cssStyle.label}><b>Name</b></label><br />
     <input className={cssStyle.input} placeholder="Name" type="text"></input><br />
     
     <label className={cssStyle.label}><b>Email</b></label><br />
     <input className={cssStyle.input} placeholder="Email" type="text"></input><br />
     
     <label className={cssStyle.label}><b>Phone Number</b></label><br />
     <input className={cssStyle.input} placeholder="Phone Number" type="text"></input><br /><br />

     <Link href={"/contact"}><button className={cssStyle.button}>
     Contact-Us</button></Link>
     
     </form> 
                </div>

                <div>
                  <form>
                    <label className={cssStyle.text} ><b>Give some suggestion for our product!!</b></label>
                    <textarea className={cssStyle.area} placeholder="Message"></textarea>
                   </form>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}