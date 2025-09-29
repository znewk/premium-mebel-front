import styles from './style.module.css'
import Head from "next/head";
import Header from "../../src/components/Header";
import WhatsAppButton from "../../src/components/WhatsAppButton";
import Footer from "../../src/components/Footer";
import HowWeWork from "../../src/components/HowWeWork";
import MatressesBlock from "../../src/components/MatressesBlock";
import ContactsBlock from "../../src/components/ContactsBlock";

const Mattresses = () => {
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
            <meta name={'keywords'} content={'перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане'}/>
            <Head>
                <title>PREMIUM MEBEL - Матрасы</title>
                <link rel="icon" href="/icon.png" />
                <div dangerouslySetInnerHTML={{__html: ymetrica()}}/>
            </Head>

            <Header mattresses={true}/>
            <WhatsAppButton/>

            <MatressesBlock/>

            <ContactsBlock/>

            <Footer/>
        </div>
    )
}

export default Mattresses;