import React, { useState } from "react";
import styles from './style.module.css';
import classnames from 'classnames';
import { Image } from "react-bootstrap";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
// import Snowfall from "react-snowfall"; // если нужно – раскомментируй

const Header = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showConsForm, setShowConsForm] = useState(false);

    const openOrderModal = () => { setShowConsForm(false); setShow(true); };

    return (
        <>
            <div className={styles.header}>
                {/* мета лучше хранить в <Head>, но оставляю как у тебя */}
                <meta
                    name={'keywords'}
                    content={'перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане'}
                />
                <ModalWindow
                    show={show}
                    handleClose={handleClose}
                    heading={showConsForm ? 'Получить консультацию' : 'Сделать заказ'}
                    body={showConsForm ? <CreateNewApplicationToConsultation /> : <CreateApplicationForm />}
                />

                <div className={styles.desktopHeader}>
                    <a href="/" className={styles.logo} aria-label="Premium Mebel — переход на главную">
                        <span>PREMIUM MEBEL</span>
                        <span className={styles.logoSub}>МЕБЕЛЬНОЕ ПРОИЗВОДСТВО</span>
                    </a>

                    {/* центральное меню */}
                    <div className={styles.menu} role="navigation" aria-label="Основное меню">
                        <a href="/" className={classnames(props.main ? styles.isHere : null, styles.menuItem)}>ГЛАВНАЯ</a>
                        <a href="/restoration" className={classnames(props.restoration ? styles.isHere : null, styles.menuItem)}>РЕСТАВРАЦИЯ МЕБЕЛИ</a>
                        <a href="/beds" className={classnames(props.beds ? styles.isHere : null, styles.menuItem)}>КРОВАТИ</a>
                        <a href="/mattresses" className={classnames(props.mattresses ? styles.isHere : null, styles.menuItem)}>МАТРАСЫ</a>
                        <button
                            type="button"
                            className={classnames(styles.menuItem, styles.menuAsButton)}
                            onClick={() => { setShowConsForm(false); setShow(true); }}
                        >
                            ЗАКАЗАТЬ УСЛУГУ
                        </button>
                        <button
                            type="button"
                            className={classnames(styles.menuItem, styles.menuAsButton)}
                            onClick={() => { setShowConsForm(true); setShow(true); }}
                        >
                            КОНСУЛЬТАЦИЯ
                        </button>
                    </div>

                    {/* ПРАВЫЙ блок: телефон + часы + кнопка "Заказать услугу бесплатно" */}
                    <div className={styles.cta}>
                        <div className={styles.phoneHours}>
                            <a
                                href="tel:+77789416981"
                                className={styles.link}
                                aria-label="Позвонить по номеру +7 778 941 69 81"
                            >
                                <div>
                                    Звоните с 9:00 до 18:00 в будние дни
                                </div>
                                <div className={styles.ctaPhoneBlock}>
                                    <Image src={'/phone-call-black.png'} className={styles.phoneIcon} alt="" aria-hidden="true" />
                                    <span className={styles.ctaPhoneNumber}>
                                        +7 (778) 941-69-81
                                    </span>
                                </div>
                            </a>
                        </div>
                        <button
                            type="button"
                            className={styles.ctaBtn}
                            onClick={openOrderModal}
                            aria-label="Заказать услугу бесплатно"
                        >
                            Заказать услугу бесплатно
                        </button>
                    </div>

                    {/* Кнопка бургера (мобайл) */}
                    <div
                        className={styles.menuBtn}
                        onClick={() => { setShowMobileMenu(!showMobileMenu); }}
                        aria-label="Открыть мобильное меню"
                        role="button"
                    >
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>

                {/* Мобильное меню */}
                <div className={classnames(showMobileMenu ? styles.mobileMenu : styles.hide)}>
                    <a href="/" className={classnames(styles.menuItem)}>ГЛАВНАЯ</a>
                    <a href="/restoration" className={classnames(styles.menuItem)}>РЕСТАВРАЦИЯ МЕБЕЛИ</a>
                    <a href="/beds" className={classnames(styles.menuItem)}>КРОВАТИ</a>
                    <a href="/mattresses" className={classnames(styles.menuItem)}>МАТРАСЫ</a>
                    <div >
                        <div className={styles.phoneHours}>
                            <a
                                href="tel:+77789416981"
                                className={styles.link}
                                aria-label="Позвонить по номеру +7 778 941 69 81"
                            >
                                <div>
                                    Звоните с 9:00 до 18:00 в будние дни
                                </div>
                                <div className={styles.ctaPhoneBlock}>
                                    <Image src={'/phone-call-black.png'} className={styles.phoneIcon} alt="" aria-hidden="true" />
                                    <span className={styles.ctaPhoneNumber}>
                                        +7 (778) 941-69-81
                                    </span>
                                </div>
                            </a>
                        </div>
                        <button
                            type="button"
                            className={styles.ctaBtn}
                            onClick={openOrderModal}
                            aria-label="Заказать услугу бесплатно"
                        >
                            Заказать услугу бесплатно
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Header;
