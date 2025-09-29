import React, {useEffect, useState} from "react";
import styles from './style.module.css'
import classnames from 'classnames'
import {Image} from "react-bootstrap";
import CreateApplicationToProduct from "../Forms/CreateApplicationToProduct";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";
import Snowfall from "react-snowfall";

const Header = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [showConsForm, setShowConsForm] = useState(false)

    return (
        <>
            <div className={styles.header}>
                {/*<Image src={'/35.png'} className={styles.iconLeft}/>*/}
                {/*<Image src={'/15.png'} className={styles.iconRigth}/>*/}
                {/*<Snowfall*/}
                {/*    style={{*/}
                {/*        "position": "absolute",*/}
                {/*        "width": "100vw",*/}
                {/*        "height": "100vh"*/}
                {/*    }}*/}
                {/*/>*/}
                <meta name={'keywords'} content={'перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане'}/>
                <ModalWindow show={show} handleClose={handleClose} heading={showConsForm ? 'Получить консультацию' : `Сделать заказ`} body={showConsForm ? <CreateNewApplicationToConsultation/> : <CreateApplicationForm/>}/>
                <div className={styles.desktopHeader}>

                    

                    <a href="/" className={styles.logo}>
                        <span>PREMIUM MEBEL</span>
                        <span className={styles.logoSub}>МЕБЕЛЬНОЕ ПРОИЗВОДСТВО</span>
                        {/*<Image src={'/logo2.png'} className={styles.logoImg}/>*/}
                        {/*<span style={{background: 'black', color: 'white', padding: '0 0 0 5px', borderRadius: '5px 0 0 5px', border: '1px solid black'}}>MAL.</span> DER*/}
                    </a>
                    <div className={styles.menu}>
                        <a href="/" className={classnames(props.main ? styles.isHere : null, styles.menuItem)}>ГЛАВНАЯ</a>
                        <a href="/restoration" className={classnames(props.restoration ? styles.isHere : null,styles.menuItem)}>РЕСТАВРАЦИЯ МЕБЕЛИ</a>
                        <a href="/beds" className={classnames(props.beds ? styles.isHere : null,styles.menuItem)}>КРОВАТИ</a>
                        <a href="/mattresses" className={classnames(props.mattresses ? styles.isHere : null,styles.menuItem)}>МАТРАСЫ</a>
                        <a className={classnames(styles.menuItem)} onClick={()=> {
                            setShowConsForm(false)
                            setShow(!show)
                        }}>ЗАКАЗАТЬ УСЛУГУ</a>
                        <a className={classnames(styles.menuItem)} onClick={()=> {
                            setShowConsForm(true)
                            setShow(!show)
                        }}>КОНСУЛЬТАЦИЯ</a>
                        
                    </div>
                    <div className={styles.menu}>
                    <div className={styles.phones}>
                    <Image src={'/phone-call-black.png'} className={styles.phoneIcon}/>
                    <a href={'tel:+77789416981'} className={classnames(styles.menuItem, styles.phoneNumber)}>
                        +7 (778) 941-69-81
                    </a>
                </div>
                    </div>
                    <div className={styles.menuBtn} onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={classnames(showMobileMenu ? styles.mobileMenu : styles.hide)}>
                    <a href="/" className={classnames(styles.menuItem)}>ГЛАВНАЯ</a>
                    <a href="/restoration" className={classnames(styles.menuItem)}>РЕСТАВРАЦИЯ МЕБЕЛИ</a>
                    <a href="/beds" className={classnames(styles.menuItem)}>КРОВАТИ</a>
                    <a href="/mattresses" className={classnames(styles.menuItem)}>МАТРАСЫ</a>
                    <a className={classnames(styles.menuItem)} onClick={()=> {
                        setShowConsForm(false)
                        setShow(!show)
                    }}>ЗАКАЗАТЬ УСЛУГУ</a>
                    <a className={classnames(styles.menuItem)} onClick={()=> {
                        setShowConsForm(true)
                        setShow(!show)
                    }}>КОНСУЛЬТАЦИЯ</a>
                </div>
            </div>
        </>
    )
}

export default Header;