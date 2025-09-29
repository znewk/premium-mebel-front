import styles from './styles.module.css'
import TitleBlock from "../TitleBlock";
import React from "react";

const SendApplicationBlock = ({...props}) => {
    return(
        <div className={styles.container}>
            <div className={styles.second}>
                <TitleBlock src={''} title={'Съёмка и опереторская работа'}/>

                <span className={styles.title}>
                Бесплтаная консультация и заказ услуг онлайн. <br/>
                Для лучшего результата, требуются лучшие мастера. Довертесь нам. MalDer ©
            </span>

                <div className={styles.form}>
                    <span className={styles.title}>Выберите тип услуги:</span>
                    <select className={styles.select}>
                        <option value="Клип">Клип</option>
                        <option value="Кино/Короткометражное кино">Кино/Короткометражное кино</option>
                        <option value="Сериал">Сериал</option>
                        <option value="Услуги операторе/Видеогрофа">Услуги операторе/Видеогрофа</option>
                    </select>
                    <br/>
                    <input type="number" className={styles.input} placeholder={"Номер телефона"}/> <br/>
                    <input type="number" className={styles.input} placeholder={"ФИО"}/>

                    <div className={styles.btnBody}>
                        <button className={styles.btn}>Оставить заявку</button>
                    </div>

                </div>
            </div>
            <div className={styles.second} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <a href={'/'} className={styles.logo}>
                    <span style={{background: 'white', color: 'black', padding: '0 0 0 5px', borderRadius: '5px 0 0 5px', border: '1px solid white'}}>MAL.</span> DER
                </a>
            </div>
        </div>
    )
}

export default SendApplicationBlock;