import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import {Image} from "react-bootstrap";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import React, {useState} from "react";
import classnames from 'classnames'

const WhyUsBeds = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.container} style={{padding: props.paddingZero ? 0 : '0 5%'}}>
            <ModalWindow show={show} handleClose={handleClose} heading={'Получить консультацию'} body={<CreateNewApplicationToConsultation/>}/>
            <div className={styles.second}>
                <TitleBlock title={'Изготовление мягкой мебели'} subtitle={'Гарантия на выполненные работы – 6 месяцев'}/>
                <div className={styles.restavrationBlocksWrapper}>
                    <div className={classnames(styles.restavrationBlock, styles.firstBlock)}
                        style={{backgroundImage: `url(/whyus4.jpg)`}}
                    >
                        <div className={classnames(styles.background, styles.firstBlock)}>

                            <span className={styles.restavrationBlockSubtitle}>Формы, дизайн, комплектация</span>
                            <span className={styles.restavrationBlockTitle}>
                                Изготавливаем мебель по Вашему эскизу <br/>
                                Так же Вы можете выбрать мягкую мебель в нашем каталоге
                            </span>

                        </div>
                    </div>
                    <div className={styles.restavrationBlock}
                         style={{backgroundImage: `url(/whyus5.jpg)`}}
                    >
                        <div className={styles.background}>

                            <span className={styles.restavrationBlockSubtitle}>Выполняем заказы любой сложности</span>
                            <span className={styles.restavrationBlockTitle}>Подушки, кресла, угловые диваны, кровати и тд.</span>

                        </div>
                    </div>
                    <div className={classnames(styles.restavrationBlock, styles.lastBlock)}
                         style={{backgroundImage: `url(/whyus6.jpg)`}}
                    >
                        <div className={classnames(styles.background, styles.lastBlock)}>
                            <span className={styles.restavrationBlockSubtitle}>ИЗГОТОВЛЕНИЕ ИЗ КАЧЕСТВЕННЫХ МАТЕРИАЛОВ</span>
                            <span className={styles.restavrationBlockTitle}>Натуральное дерево, антивандальный материал</span>
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
            {/*            <a href={'tel:+77789416981'} className={styles.leftBtn}>Позвонить</a>*/}
            {/*            <a className={styles.rightBtn} onClick={()=>setShow(!show)}>Получить консультацию</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    )
}

export default WhyUsBeds;