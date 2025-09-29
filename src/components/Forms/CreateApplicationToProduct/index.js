import styles from './style.module.css'
import TitleBlock from "../../TitleBlock";
import React, {useEffect, useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import kz from 'react-phone-number-input/locale/ru.json'
import API from "../../../api";
import {Image} from "react-bootstrap";

const CreateApplicationToProduct = ({product, ...props}) => {
    const api = new API()


    const sendApplication = async () => {
        if(phone.length<12 || phone.length > 12) {
            setState('Неккоретный номер телефона')
        }
        else if(name.length<3){
            setState('Неккоретная длина ФИО')
        } else {
            await api.createApplication(name, phone, type, typeOfNewFurniture, typeOfRestFurniture, sleepingPlaceSize, message)
            setAppSend(true)

            setState('Заявка успешно отправлена! Ожидайте звонка.')
        }
        setLoading(false)
    }

    const [type, setType] = useState('new')

    const [typeOfNewFurniture, setTypeOfNewFurniture] = useState('')
    const [typeOfRestFurniture, setTypeOfRestFurniture] = useState('')

    const [sleepingPlaceSize, setSleepingPlaceSize] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [message, setMessage] = useState('')

    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [appSend, setAppSend] = useState(false)

    const setData = () => {
        if(product.toRest){
            setType('rest')
            setTypeOfRestFurniture(product.title)
        } else {
            setType('new')
            setTypeOfNewFurniture(product.title)
        }
    }

    useEffect(()=>{
        setData()
    }, [])

    return (
        <div>
            <div className={styles.img} style={{backgroundImage: `url(${product.url})`}}>

            </div>
            <span className={styles.title}>{product.title}</span>
            <span className={styles.subtitle}>Примерная стоимость <span className={styles.price}> {product.price}тг <span style={{textDecoration: 'line-through'}}>   {product.oldPrice}</span></span></span> <br/>
            <span className={styles.subtitle}>
                  Стоимость услуги может розниться в зависимости от объема, на сайте указана ориентировочная цена, точную цену вам назовут после оценки. <br/>После заказа ваша заявка попадет в модерацию, наши менеджеры свяжуться с Вами для консультации и обсуждения дополнительной информации о заказе.
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
                            {
                                product.bed && (
                                    <>
                                        <span className={styles.subtitle}>Размер изголовья <span style={{fontFamily: 'Rubik Medium'}}>{product.headrestSize}</span>.</span>
                                        <span className={styles.subtitle}>Выберите размер спального места:</span>
                                        <select className={styles.select} onChange={event => setSleepingPlaceSize(event.target.value)}>
                                            {
                                                product.sleepingPlaceSize.map(item=>(
                                                    <option value={item.title}>{item.title}см</option>
                                                ))
                                            }
                                        </select> <br/>
                                    </>
                                )
                            }

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

export default CreateApplicationToProduct;