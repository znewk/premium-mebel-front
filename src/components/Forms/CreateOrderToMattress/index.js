import styles from './style.module.css'
import TitleBlock from "../../TitleBlock";
import React, {useEffect, useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import kz from 'react-phone-number-input/locale/ru.json'
import API from "../../../api";
import {Image} from "react-bootstrap";

const CreateOrderToMattress = ({product, ...props}) => {
    const api = new API()


    const sendApplication = async () => {
        if(phone.length<12 || phone.length > 12) {
            setState('Неккоретный номер телефона')
        }
        else if(name.length<3){
            setState('Неккоретная длина ФИО')
        } else {
            await api.createOrderToMattress(name, phone, type, length, width, message)
            setAppSend(true)

            setState('Заявка успешно отправлена! Ожидайте звонка.')
        }
        setLoading(false)
    }

    const [type, setType] = useState(product.title)
    const [width, setWidth] = useState('80')
    const [length, setLength] = useState('180')



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
            <div className={styles.img} style={{backgroundImage: `url(${product.url})`}}>

            </div>
            <span className={styles.title}>{product.title}</span><br/>
            <span className={styles.subtitle}>
                  {product.description}
            </span> <br/>
            <span className={styles.subtitle}>Стоимость от <span className={styles.price}>{product.firstPrice}тг</span> до  <span className={styles.price}>{product.secondPrice}тг</span> в зависимости от размера.</span> <br/>

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
                                <span className={styles.subtitle}>Выберите размер:</span>
                                <div className={styles.size}>
                                    Ширина
                                    <select className={styles.select} value={width} onChange={event => setWidth(event.target.value)}>
                                        <option value="80">80см</option>
                                        <option value="90">90см</option>
                                        <option value="100">100см</option>
                                        <option value="120">120см</option>
                                        <option value="140">140см</option>
                                        <option value="160">160см</option>
                                        <option value="180">180см</option>
                                        <option value="190">200см</option>
                                    </select>
                                    x
                                    <select className={styles.select} value={length} onChange={event => setLength(event.target.value)}>
                                        <option value="180">180см</option>
                                        <option value="190">190см</option>
                                        <option value="200">200см</option>
                                    </select>
                                    Длина
                                </div>

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
                                    <button className={styles.btn} disabled={appSend} onClick={()=> {
                                        setLoading(true)
                                        sendApplication()
                                    }}>Оставить заявку</button>
                                </div>

                                <span className={styles.subtitle} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                            </div>
                        )
                )
            }

        </div>
    )
}

export default CreateOrderToMattress;