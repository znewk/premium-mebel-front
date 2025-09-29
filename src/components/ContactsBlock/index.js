import styles from "./style.module.css"
import React, {useEffect, useState} from "react";
import classnames from "classnames";
import PhoneInput from "react-phone-number-input";
import kz from 'react-phone-number-input/locale/ru.json'
import {Image} from "react-bootstrap";
import API from "../../api";
import TitleBlock from "../TitleBlock";

const ContactsBlock = () =>{
    const api = new API()

    const sendApplication = async () => {
        if(phone.length<12 || phone.length > 12) {
            setState('Неккоретный номер телефона')
        }
        else if(name.length<3){
            setState('Неккоретная длина ФИО')
        } else {
            await api.createNewApplicationToConsultation(name, phone, message)
            setAppSend(true)

            setState('Заявка успешно отправлена! Ожидайте звонка.')
        }
        setLoading(false)
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [message, setMessage] = useState('')

    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [appSend, setAppSend] = useState(false)

    const questions = [
        {
            question: 'Есть ли у Вас рассрочка?',
            answer: 'Да, есть рассрочка, принимаем оплату через Kaspi и другие банки.'
        },
        {
            question: 'Можно ли заказать изготовление дивана, кресел?',
            answer: 'Да, оставьте заявку на нашем сайте, наши сотрудники свяжутся с Вами и отправят Вам наш каталог.'
        },
        {
            question: 'Преимущества перетяжки?',
            answer: 'Получится сэкономить значительные финансовые средства. Обивка и перетяжка, стоят дешевле, чем покупка нового интерьера.'
        },
        {
            question: 'Можно ли заменить внутренности дивана?',
            answer: 'Да. Выполняя работу по перетяжке, получится исправить проблемы: с каркасом дивана, замена поролона и тд.'
        },
        {
            question: 'Сколько стоит выезд замерщика и трансфер мебели?',
            answer: 'Трансфер мебели за наш счёт, выезд замерщика-бесплатно.'
        },
        {
            question: 'От чего зависит стоимость?',
            answer: 'Цена зависит от самой модели мягкой мебели. От внутренних изменений (переобивка, механиз и тд). Категория выбранного материала. На изготовление идет фиксированная цена, может варьироваться по выбору материала.\n'
        }
    ]

    useEffect(()=>{

    }, [])

    return (
        <div className={styles.container}>
            <TitleBlock title={'Ответы на популярные вопросы'}/>

            <div className={styles.wrapper}>
                {
                    questions.map((question)=>{
                        const [show, setShow] = useState(false)
                        return(
                            <>
                                <div className={styles.question}>
                                    <div className={styles.questionHeader} onClick={()=>setShow(!show)}>
                                        <span className={styles.questionText}>{question.question}</span>
                                        <span  style={{transform: show ? "rotate(180deg)" : null}}>ᐯ</span>
                                    </div>
                                    {
                                        show ? (
                                            <div className={styles.questionAnswer}>
                                                <span>{question.answer}</span>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <hr/>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ContactsBlock;