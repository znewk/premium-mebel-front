import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import classnames from 'classnames'
import {Image} from "react-bootstrap";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import React, {useState} from "react";

const Materials = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={'Получить консультацию'} body={<CreateNewApplicationToConsultation/>}/>
            <TitleBlock title={`Материалы с которыми мы работаем`} subtitle={''}/>

            <div className={styles.wrapper}>
                <div className={classnames(styles.block30, styles.block70)} style={{backgroundImage: 'url(/materials1.jpeg)'}}>
                    <div className={styles.backHover}>
                        <span className={styles.title}>Велюр</span>
                        <span className={styles.subtitle}>
                            Велюр – это ворсовая ткань, которая завоевала множество сердец домохозяек,
                            спортсменов,мебельных производителей и театральных костюмеров.
                            Внешний вид является аристократичным и роскошным.
                            Велюр способен сделать изделие более интересным и изящным, выглядит красиво и необычно.
                        </span>
                    </div>
                </div>
                <div className={styles.block70} style={{backgroundImage: 'url(/materials2.jpg)'}}>
                    <div className={styles.backHover}>
                        <span className={styles.title}>Кожзам</span>
                        <span className={styles.subtitle}>
                            Кожзам – это искусственный материал, прочный и безопасный.
                            Искусственная кожа способна заменить полностью натуральную, отличить их невозможно.
                            Обладает отменными декоративными свойствами, недорогая, надежная. Обширное количество расцветок,
                            выпускается широкой линейкой разнообразных фактур.
                        </span>
                    </div>
                </div>
                <div className={classnames(styles.block30, styles.block70)} style={{backgroundImage: 'url(/materials3.jpeg)'}}>
                    <div className={styles.backHover}>
                        <span className={styles.title}>Замша</span>
                        <span className={styles.subtitle}>
                            Замша — кожа, выработанная жировым и формальдегидно-жировым способами дубления из шкур оленей (самая высококачественная замша), лосей, опойка и коз.
                        </span>
                    </div>
                </div>
                <div className={classnames(styles.block30, styles.block70)} style={{backgroundImage: 'url(/materials4.jpg)'}}>
                    <div className={styles.backHover}>
                        <span className={styles.title}>Жаккард</span>
                        <span className={styles.subtitle}>
                            Жаккардовая ткань — крупноузорчатая ткань, сложного или простого переплетения, раппорт которого по основе содержит более 24 разнопереплетающихся нитей.
                        </span>
                    </div>
                </div>
                <div className={classnames(styles.block30, styles.block70)} style={{backgroundImage: 'url(/materials5.jpeg)'}}>
                    <div className={styles.backHover}>
                        <span className={styles.title}>Флок</span>
                        <span className={styles.subtitle}>
                            Флок — это нетканый материал, который производят методом нанесения синтетического ворса на проклеенную основу. На ощупь он приятный, бархатистый и фактурный. Хороший флок отличается густым ворсом и высококачественной клеевой базой.
                        </span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.beforeAfter}>
                {/*<div className={styles.image} style={{backgroundImage: 'url(https://avatars.mds.yandex.net/get-altay/1903890/2a0000016b92f7e576fd917d9ec55d6fa1e8/XXL)'}}>*/}

                {/*</div>*/}
                <Image src={'/XXL.jpg'} className={styles.image} />
                <div className={styles.firstMessage}>
                    <TitleBlock title={'До/После нашей работы'} subtitle={'Зачем покупать новую мебель, если можно её полностью восстановить с экономией от 50 до 80% за очень короткий срок? Дайте своей мебели вторую жизнь.'}/> <br/> <br/>
                    <div className={styles.footer}>
                        <a href={'tel:+77007950695'} className={styles.rightBtn}>Позвонить</a>
                        <a className={styles.rightBtn} onClick={()=>setShow(!show)}>Получить консультацию</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Materials;