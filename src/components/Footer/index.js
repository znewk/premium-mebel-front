import styles from './style.module.css'
import React, {useState} from "react";
import {Image} from "react-bootstrap";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import classnames from "classnames";

const Footer = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [showConsForm, setShowConsForm] = useState(false)

    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={showConsForm ? 'Получить консультацию' : `Сделать заказ`} body={showConsForm ? <CreateNewApplicationToConsultation/> : <CreateApplicationForm/>}/>
            <a href={'/'} className={styles.logo}>
                <span>PREMIUM MEBEL</span>
                <span className={styles.logoSub}>МЕБЕЛЬНОЕ ПРОИЗВОДСТВО</span>
            </a>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <span className={styles.title}>Контанкты</span>
                    <a href={'tel:+77789416981'} className={styles.value}>+7 (778) 941-69-81</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Почта</span>
                    <a href={'mailto:premiummebel.kz@gmail.com'} className={styles.value}>premiummebel.kz@gmail.com</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Соц. сети</span>
                    <a href={'https://instagram.com/premiummebel.kz'} className={styles.value}>Instagram</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Маршрутизация</span>
                    <a href={'/'} className={styles.value}>Главная</a>
                    <a href="/restoration" className={styles.value}>Реставрация мебели</a>
                    <a href="/beds" className={styles.value}>Кровати</a>
                    <a href={'/mattresses'} className={styles.value}>Матрасы</a>
                    <a className={styles.value} onClick={()=> {
                        setShowConsForm(false)
                        setShow(!show)
                    }}>Заказать услугу</a>
                    <a className={styles.value} onClick={()=> {
                        setShowConsForm(true)
                        setShow(!show)
                    }}>Консультация</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;