import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import {Image} from "react-bootstrap";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import React, {useState} from "react";
import classnames from 'classnames'

const WhyUs = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={'Получить консультацию'} body={<CreateNewApplicationToConsultation/>}/>
            <div className={styles.second} id={'restoration'}>
                <TitleBlock title={'Перетяжка мягкой мебели'} subtitle={'Гарантия на выполненные работы – 6 месяцев'}/>
                <div className={styles.restavrationBlocksWrapper}>
                    <div className={classnames(styles.restavrationBlock, styles.firstBlock)}
                        style={{backgroundImage: `url(/whyus1.png)`}}
                    >
                        <div className={classnames(styles.background, styles.firstBlock)}>
                            <div>
                                <span className={styles.restavrationBlockSubtitle}>КАЧЕСТВЕННО И БЫСТРО</span> <br/>
                                <span className={styles.restavrationBlockTitle}>Перетягиваем обивку</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.restavrationBlock}
                         style={{backgroundImage: `url(/whyus2.jpg)`}}
                    >
                        <div className={styles.background}>
                            <div>
                                <span className={styles.restavrationBlockSubtitle}>ВОЗВРАЩАЕМ ФОРМУ МЕБЕЛИ</span> <br/>
                                <span className={styles.restavrationBlockTitle}>Замена наполнителя</span>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.restavrationBlock, styles.lastBlock)}
                         style={{backgroundImage: `url(/whyus3.jpg)`}}
                    >
                        <div className={classnames(styles.background, styles.lastBlock)}>
                            <div>
                                <span className={styles.restavrationBlockSubtitle}>КОНСТРУКЦИИ КАК НОВЫЕ</span> <br/>
                                <span className={styles.restavrationBlockTitle}>Заменяем механизмы</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={styles.first}>*/}
            {/*    /!*<div className={styles.image} style={{backgroundImage: 'url(https://avatars.mds.yandex.net/get-altay/1903890/2a0000016b92f7e576fd917d9ec55d6fa1e8/XXL)'}}>*!/*/}

            {/*    /!*</div>*!/*/}
            {/*    <Image src={'/XXL.jpg'} className={styles.image} />*/}
            {/*    <div className={styles.firstMessage}>*/}
            {/*        <TitleBlock title={'До/После нашей работы'} subtitle={'Зачем покупать новую мебель, если можно её полностью восстановить с экономией от 50 до 80% за очень короткий срок? Дайте своей мебели вторую жизнь.'}/> <br/> <br/>*/}
            {/*        <div className={styles.footer}>*/}
            {/*            <a href={'tel:+77007950695'} className={styles.leftBtn}>Позвонить</a>*/}
            {/*            <a className={styles.rightBtn} onClick={()=>setShow(!show)}>Получить консультацию</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    )
}

export default WhyUs;