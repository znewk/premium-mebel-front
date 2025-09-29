import styles from './style.module.css'
import TitleBlock from "../../TitleBlock";
import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import kz from 'react-phone-number-input/locale/ru.json'
import API from "../../../api";
import {Image} from "react-bootstrap";

const CreateApplicationForm = ({...props}) => {
    const api = new API()


    const sendApplication = async () => {
        if(type==='mattress'){
            if(phone.length<12 || phone.length > 12) {
                setState('Неккоретный номер телефона')
            }
            else if(name.length<3){
                setState('Неккоретная длина ФИО')
            } else {
                await api.createOrderToMattress(name, phone, mattress, length, width, message)
                setAppSend(true)

                setState('Заявка успешно отправлена! Ожидайте звонка.')
            }
        } else {
            if(phone.length<12 || phone.length > 12) {
                setState('Неккоретный номер телефона')
            }
            else if(name.length<3){
                setState('Неккоретная длина ФИО')
            } else {
                await api.createApplication(name, phone, type, typeOfNewFurniture, typeOfRestFurniture, '', message)
                setAppSend(true)

                setState('Заявка успешно отправлена! Ожидайте звонка.')
            }
        }
        setLoading(false)
    }

    const [type, setType] = useState('new')

    const [typeOfNewFurniture, setTypeOfNewFurniture] = useState('Двуспальная кровать')
    const [typeOfRestFurniture, setTypeOfRestFurniture] = useState('Стулья')

    const [mattress, setMattress] = useState('Comfort Plus')
    const [width, setWidth] = useState('80')
    const [length, setLength] = useState('180')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [message, setMessage] = useState('')

    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [appSend, setAppSend] = useState(false)

    return (
        <div>
            <span className={styles.title}>
                {/*ORDER - Мы имеем большой опыт работы в данной сфере и можем гарантировать фабричное качество.*/}
                {/*Большой выбор обивочных материалов на любой вкус и цвет. <br/> <br/>*/}
                Оставьте заявку на нужную услугу бесплатно. <br/>Наши менеджеры свяжуться с вами после обработки заявки.
            </span>
            <br/>
            {
                loading ? (
                    <div className={styles.loadingBlock}>
                        <Image src={'/spinner.png'} className={styles.spinner}/>
                    </div>
                ) : (
                    appSend ? (
                        <div className={styles.loadingBlock}>
                            <span className={styles.title} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    ) : (
                        <div className={styles.form}>
                            <span className={styles.title}>Выберите тип услуги:</span>
                            <select className={styles.select} onChange={event => setType(event.target.value)}>
                                <option value="new">Заказ новой мебели</option>
                                <option value="rest">Заказ реставрации мебели</option>
                                <option value="mattress">Заказ матраса</option>
                            </select> <br/>

                            {
                                type === 'mattress' ? (
                                    <>
                                        <span className={styles.title}>Выберите вид матраса:</span>
                                        <select className={styles.select} value={mattress} onChange={event => setMattress(event.target.value)}>
                                            <option value="Comfort Plus">Comfort Plus</option>
                                            <option value="Deluxe 8">Deluxe 8</option>
                                            <option value="Prestige 2">Prestige 2</option>
                                            <option value="Elit 7">Elit 7</option>
                                            <option value="Elit 4">Elit 4</option>
                                            <option value="Deluxe 9">Deluxe 9</option>
                                        </select>
                                        <br/>
                                        <span className={styles.subtitle}>Выберите размер:</span>
                                        <div className={styles.size}>
                                            Ширина
                                            <select className={styles.select} style={{margin: '0 10px'}} value={width} onChange={event => setWidth(event.target.value)}>
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
                                            <select className={styles.select} style={{margin: '0 10px'}} value={length} onChange={event => setLength(event.target.value)}>
                                                <option value="180">180см</option>
                                                <option value="190">190см</option>
                                                <option value="200">200см</option>
                                            </select>
                                            Длина
                                        </div>
                                    </>
                                ) : (
                                    type === 'new' ? (
                                        <>
                                            <span className={styles.title}>Выберите вид мебели:</span>
                                            <select className={styles.select} value={typeOfRestFurniture} onChange={event => setTypeOfNewFurniture(event.target.value)}>
                                                <option value="Двуспальная кровать">Двуспальная кровать</option>
                                                <option value="Односпальная кровать">Односпальная кровать</option>
                                            </select>
                                        </>

                                    ) : (
                                        <>
                                            <span className={styles.title}>Выберите вид мебели:</span>
                                            <select className={styles.select} value={typeOfRestFurniture} onChange={event => setTypeOfRestFurniture(event.target.value)}>
                                                <option value="Стулья">Стулья</option>
                                                <option value="Диваны">Диваны</option>
                                                <option value="Кресла">Кресла</option>
                                                <option value="Диван двойка">Диван двойка</option>
                                                <option value="Угловые диваны">Угловые диваны</option>
                                                <option value="Подлокотники">Подлокотники</option>
                                            </select>
                                        </>
                                    )
                                )
                            }
                            <br/> <br/>
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

                            <span className={styles.title} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default CreateApplicationForm;