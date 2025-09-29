import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import {Image} from "react-bootstrap";

const HowWeWork = () => {
    return (
        <div className={styles.container}>
            <TitleBlock whiteMode={true} howWeWork={true} title={'Как мы работаем и как с Нами связаться'} subtitle={'Как сделать заказ и что для этого нужно'}/>

            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <Image src={'/phone-call.png'} className={styles.blockImg}/>
                    <div className={styles.blockFooter}>
                        <span className={styles.blockTitle}>Свяжитесь с нами</span> <br/>
                        <div className={styles.blockSubtitle}>Оставьте заявку через сайт. Напишите нам на WhatsApp.</div>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/calculator.png'} className={styles.blockImg}/>
                    <div className={styles.blockFooter}>
                        <span className={styles.blockTitle}>Расчитаем стоимость</span> <br/>
                        <span className={styles.blockSubtitle}>Предварительно рассчитаем стоимость перетяжки по фото.</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/correct.png'} className={styles.blockImg}/>
                    <div className={styles.blockFooter}>
                        <span className={styles.blockTitle}>Выбор материала</span> <br/>
                        <span className={styles.blockSubtitle}>Выберем ткань, наполнитель. Обговорим все детали. Выясни. окончательную стоимость.</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/fast-delivery.png'} className={styles.blockImg}/>
                    <div className={styles.blockFooter}>
                        <span className={styles.blockTitle}>Доставка</span> <br/>
                        <span className={styles.blockSubtitle}>Наша работа с мебелью от 3-х дней. В зависимости от объёма заказа. Заберем-привезем сами.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork;
