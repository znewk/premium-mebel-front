import styles from './main.module.css'
import Head from "next/head";
import DontWork from "../src/components/DontWork";
const Error = () => {
    const ymetrica = () => {
        return (
            "<!-- Yandex.Metrika counter -->\n" +
            "   <script type=\"text/javascript\" >\n" +
            "       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
            "       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n" +
            "        (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n" +
            "\n" +
            "        ym(94370757, \"init\", {\n" +
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
        <div className={styles.container}>

            <Head>
                <title>Упс!</title>
                <link rel="icon" href="/icon.png" />
                {/*<div dangerouslySetInnerHTML={{__html: ymetrica()}}/>*/}
            </Head>
           <DontWork/>

            {/*<Head>*/}
            {/*    <title>MEBELINK - 404 Страница не найдена</title>*/}
            {/*    <link rel="icon" href="/icon.png" />*/}
            {/*</Head>*/}
            {/*<Header/>*/}
            {/*<h1 className={styles.errorTitle}>404 | Страница не найдена</h1>*/}
        </div>
    )
}

export default Error;