import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";
import classnames from 'classnames'
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import CreateNewApplicationToConsultation from "../Forms/CreateNewApplicationToConsultation";

const IntroBlock = () => {

    const [showLeftSide, setShowLeftSide] = useState(false)
    const [showRightSide, setShowRightSide] = useState(false)

    const backs = [
        '../../../backgrounds/1.png',
        '../../../backgrounds/2.png',
        '../../../backgrounds/3.png',
        '../../../backgrounds/4.png',
    ]
    const [back, setBack] = useState(0)
    function randomNumber(min, max){
        const r = Math.random()*(max-min) + min
        return Math.floor(r)
    }
    const getBack = () => {
        setBack(randomNumber(0, 4))
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        setTimeout(()=>setShowLeftSide(true), 300)
        setTimeout(()=>setShowRightSide(true), 600)


        getBack()
    }, [])

    return (
        <div className={styles.container} style={{backgroundImage: `url(../../../backgrounds/main.png)`}}>
            {/*<Image src={'/sofa2.png'} className={styles.sofa1}/>*/}
            {/*<Image src={'/sofa1.png'} className={styles.sofa2}/>*/}
            {/*<span className={styles.sofa1}>Гармония в интерьере →</span>*/}
            {/*<span className={styles.sofa2}>Ваш личный комфорт →</span>*/}
            <ModalWindow show={show} handleClose={handleClose} heading={`Оставить заявку`} body={<CreateApplicationForm/>}/>
            <div className={classnames(showLeftSide ? styles.show : styles.hide ,styles.leftSide)}>

                    <h3 className={styles.desc}>
                        <h2 className={classnames(styles.title)}>
                            <span className={styles.logo}>
                            22:44 Мастерская</span> <br/>
                            Производство полного цикла<br/>
                            <span style={{fontSize: "12px"}}>№1 В КАЗАХСТАНЕ</span> <br/>
                        </h2> <br/>

                        <span className={styles.timesNewRoman}>
                            Мастерство и качество — ключи к идеальной мебели
                            <br/>  <br/>
                            <span style={{fontSize: '18px', fontFamily: 'Rubik Regular'}}>
                            Мы имеем большой опыт работы в данной сфере и можем гарантировать фабричное качество.

                            <br/>
                            Дадим Вашей мебели вторую жизнь. 

                            Создадим идеальную для Вас мебель по Вашему эскизу.
                            </span>

                            {/*<span className={styles.title}>*/}
                            {/*    Мы имеем <u >большой</u> опыт работы в данной сфере и можем гарантировать <u className={styles.timesNewRoman}>фабричное качество</u>,  <br/>*/}
                            {/*    Большой выбор обивочных материалов на <u className={styles.timesNewRoman}>любой </u>вкус и цвет.*/}
                            {/*</span>*/}

                        </span>
                        <br/> <br/>

                        <div className={styles.btnBody}>
                            <button onClick={()=>document.getElementById('restoration').scrollIntoView({behavior: 'smooth'})} className={styles.btn}>
                                {/*<Image src={'/snow2.png'} className={styles.snow1}/>*/}
                                ЗАКАЗ РЕСТАВРАЦИИ МЕБЕЛИ
                            </button>
                            <button onClick={()=>document.getElementById('beds').scrollIntoView({behavior: 'smooth'})} className={styles.btn}>
                                {/*<Image src={'/snow2.png'} className={styles.snow1}/>*/}
                                ЗАКАЗ НОВОЙ МЕБЕЛИ
                            </button>
                        </div>
                        {/*<br/>*/}
                        {/*<Image src={'/arrow-main.png'}/>*/}


                            {/*После оформления Online заявки, мы отправим к вам замерщиков, задача которых:*/}
                            {/*показать Вам образцы тканей на выбор,*/}
                            {/*рассчитать стоимость услуги,*/}
                            {/*забрать вашу мебель, и привезти по её полной готовности. <br/>*/}
                            {/*Выезд замерщика бесплатный.*/}
                    </h3>
                    <br/> <br/>
                    {/*<h1 className={classnames(styles.subtitle)}>*/}
                    {/*    ORDER - Мы имеем большой опыт работы в данной сфере и можем гарантировать фабричное качество.  <br/>*/}
                    {/*    Большой выбор обивочных материалов на любой вкус и цвет.*/}
                    {/*</h1> <br/> <br/>*/}
                    {/*<div className={styles.footer}>*/}
                    {/*    <button onClick={()=>setShow(!show)} className={styles.btn}>Заказать услугу</button>*/}
                    {/*</div>*/}
            </div>
        </div>
    )
}

export default IntroBlock;