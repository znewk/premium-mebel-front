import styles from './style.module.css'
import Head from "next/head";
import Header from "../../src/components/Header";
import WhatsAppButton from "../../src/components/WhatsAppButton";
import Footer from "../../src/components/Footer";
import HowWeWork from "../../src/components/HowWeWork";
import MatressesBlock from "../../src/components/MatressesBlock";
import Services from "../../src/components/Services";
import ContactsBlock from "../../src/components/ContactsBlock";

const Beds = () => {
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

    return (
        <div>
            <Head>
                <title>PREMIUM MEBEL - Кровати</title>
                <link rel="icon" href="/icon.png" />
                <div dangerouslySetInnerHTML={{__html: ymetrica()}}/>
            </Head>

            <Header beds={true}/>
            <WhatsAppButton/>
            <Services onlyBeds={true} num={true}/>

            <ContactsBlock/>

            <Footer/>
        </div>
    )
}

export default Beds;