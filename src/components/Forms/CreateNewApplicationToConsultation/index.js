import styles from './style.module.css'
import TitleBlock from "../../TitleBlock";
import React, {useEffect, useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import kz from 'react-phone-number-input/locale/ru.json'
import API from "../../../api";
import {Image} from "react-bootstrap";

const CreateNewApplicationToConsultation = ({...props}) => {
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

    useEffect(()=>{

    }, [])

    return (
        <div>
            <br/>
            <span className={styles.subtitle}>
                 Возникли вопросы? Или хотите узнать что-то поточнее? Оставьте заявку на бесплатную консультацию и наши менеджера свяжутся с Вами и все предельно объяснят!
            </span> <br/>

            {
                loading ? (
                    <div className={styles.loadingBlock}>
                        <Image src={'/spinner.png'} className={styles.spinner}/>
                    </div>
                ) : (
                    appSend ? (
                        <div className={styles.loadingBlock}>
                            <span className={styles.subtitle} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    ) : (
                        <div className={styles.form}>
                            <span className={styles.subtitle}>Заполните контактные данные:</span>
                            <PhoneInput
                                international
                                placeholder="Номер телефона"

                                countryCallingCodeEditable={false}
                                defaultCountry="KZ"
                                labels={kz}

                                value={phone}
                                className={styles.input}
                                onChange={setPhone}/>
                            <input type="text" className={styles.input} placeholder={"ФИО"} onChange={event => setName(event.target.value)}/> <br/>
                            <textarea className={styles.textArea} placeholder={'Оставьте сообщение'} value={message} onChange={event => setMessage(event.target.value)}>

                            </textarea>

                            <div className={styles.btnBody}>
                                <button className={styles.btn} onClick={()=> {
                                    setLoading(true)
                                    sendApplication()
                                }}>Жду звонка</button>
                            </div>

                            <span className={styles.subtitle} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    )
                )
            }

            <br/>
            <div className={styles.footer}>
                <span className={styles.subtitle}>
                  Или свяжитесь с нами напрямую
                </span>
                
                <div className={styles.footerWrapper}>
                    <a href="https://api.whatsapp.com/send?phone=77789416981&text=&source=&data=" className={styles.value}>Перейти в WhatsApp</a>
                    <a href="tel:+77789416981" className={styles.value}>+7 (778) 941-69-81</a>
                    <a href={'mailto:premiummebel.kz@gmail.com'} className={styles.value}>premiummebel.kz@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default CreateNewApplicationToConsultation;