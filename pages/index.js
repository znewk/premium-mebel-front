import Head from "next/head";
import styles from "./main.module.css"
import Header from "../src/components/Header";
import IntroBlock from "../src/components/IntroBlock";
import {useEffect, useState} from "react";
import axios from 'axios'
import Footer from "../src/components/Footer";
import WhyUs from "../src/components/WhyUs";
import Services from "../src/components/Services";
import HowWeWork from "../src/components/HowWeWork";
import Materials from "../src/components/Materials";
import WhatsAppButton from "../src/components/WhatsAppButton";
import ContactsBlock from "../src/components/ContactsBlock";
import DontWork from "../src/components/DontWork";
import PhoneButton from "../src/components/PhoneButton";
import {Helmet} from "react-helmet";

const Index = () => {

    useEffect(async ()=>{

    }, [])

    const ymetrica = () => {
        return (
            "<!-- Yandex.Metrika counter -->\n" +
            "   <script type=\"text/javascript\" >\n" +
            "       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
            "       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n" +
            "        (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n" +
            "\n" +
            "        ym(92997021, \"init\", {\n" +
            "        clickmap:true,\n" +
            "        trackLinks:true,\n" +
            "        accurateTrackBounce:true,\n" +
            "        accurateTrackBounce:true,\n" +
            "        webvisor:true,\n" +
            "        ecommerce:\"dataLayer\"\n" +
            "   });\n" +
            "</script>\n" +
            "    <noscript><div><img src=\"https://mc.yandex.ru/watch/92997021\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>\n" +
            "<!-- /Yandex.Metrika counter -->"
        )
    }

    return(
        <div>

            <Helmet>
                <meta name="keywords" content="перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане" />
                <title>PREMIUM MEBEL - Мебельное производство Астана</title>
                <link rel="icon" href="/logo.png" />
                {ymetrica()}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-EB7G5P4GC1"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-EB7G5P4GC1');
                     `}
                </script>
            </Helmet>

            {/*helmet added*/}
            <Header main={true}/>
            <WhatsAppButton/>
            <PhoneButton/>

            <IntroBlock/>
            <WhyUs/>
            <Services/>
            <Materials/>
            <HowWeWork/>

            <ContactsBlock/>

            <Footer/>

            <style jsx global>
                {`
                  body {
                    margin: 0px;
                    padding: 0px;
                  }
                `}
            </style>
        </div>
    )
}

export default Index;