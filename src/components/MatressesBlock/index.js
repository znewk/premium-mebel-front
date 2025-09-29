import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import CreateApplicationToProduct from "../Forms/CreateApplicationToProduct";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import {useState} from "react";
import CreateOrderToMattress from "../Forms/CreateOrderToMattress";

const MatressesBlock = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [productToOrder, setProductToOrder] = useState({})

    const mattresses = [
        {
            url: '/mattress1.jpg',
            title: 'Comfort Plus',
            firstPrice: '86.000',
            secondPrice: '164.000',
            description: 'По периметру Матраса Установлен бортик из пенополиуретана для ещё лучшей поддержки формы матраса. Чехол . Трикотажная ткань стеганая по периметру 3д сетка жёсткость матраса - выше средней. Размеры под заказ.',
            layers: [
                'Слой пенополиуретан 2см',
                'Слой коксовое волокно 1см',
                'Слой термовойлок',
                'Слой блок независимых пружин Pocket spring состоит из независимых пружин каждая из которых находиться в отдельном прочном чехле в таком блоке каждая пружина самостоятельно реагирует на вес тела человека не затрагивая при этом окружающие пружины',
                'Слой термовойлок',
                'Слой кокосовое волокно 2см',
                'Структофабер 2см',
            ]
        },
        {
            url: '/mattress2.jpg',
            title: 'Deluxe 8 ',
            firstPrice: '90.000',
            secondPrice: '205.000',
            description: 'По периметру матраса установлены бортики из пенополиуретан для лучшей поддержки формы матраса. Крупнозернистая хб Ткань высокого качества жаккард. Средней /мягкий по жёсткости. Размеры под заказ.',
            layers: [
                'Слой термоэластичная пена с эффектом памяти формы 4см ',
                'Слой термовойлок ',
                'Слой блок независимых пружин multipocket 512 пружин кв.м ',
                'Слой термовойлок',
                'Слой кокосовое волокно 1 см ',
                'Слой латекс с перфорацией 2см'
            ]
        },
        {
            url: '/mattress3.jpg',
            title: 'Prestige 2',
            firstPrice: '108.000',
            secondPrice: '255.000',
            description: 'Чехол крупноузорчатая хб Ткань высокого качества жаккард. Высокая жёсткость. Размеры под заказ.',
            layers: [
                'Слой латекс 2см',
                'Слой кокосовое волокно 3см',
                'Слой латекс 2 см',
                'Слой коксовое волокно 3см',
                'Слой латекс 2 см',
                'Слой кокосовое волокно 3см',
                'Слой латекс 2 см',
            ]
        },
        {
            url: '/mattress4.jpg',
            title: 'Elit 7',
            firstPrice: '53.000',
            secondPrice: '113.000',
            description: 'По периметру матраса установлен бортик из пенополиуретан для лучшей поддержки матраса. Чехол . Крупно зернистая хб Ткань жаккард высокого качества. Жёсткость матраса -выше средней. Размеры под заказ.',
            layers: [
                'Слой струтофайбер 2см',
                'Слой кокосовое волокно 1см',
                'Слой термовойлок',
                'Слой блок независимых пружин pocket spring  блок независимых пружин каждая из которых находиться в отдельном чехле каждая из которых самостоятельно реагирует на вес тела человека',
                'Слой термовойлок',
                'Слой кокосовое волокно 1см',
                'Слой струтофайбер 2см',
            ]
        },
        {
            url: '/mattress5.jpg',
            title: 'Deluxe 4',
            firstPrice: '89.000',
            secondPrice: '205.000',
            description: 'По периметру матрас  установлены бортики из пенополиуретан для поддержки матраса. Чехол. Крупнозернистая хб Ткань жаккард. Размеры под заказ.',
            layers: [
                'Слой латекс с перфорацией 2см',
                'Слой коксовое волокно 1см',
                'Слой термовойлок',
                'Слой блок независимых пружин multi pocket 512 пружин на кВ.м',
                'Слой термовойлок',
                'Слой коксовое волокно 1см',
                'Слой латекс с перфорацией',
            ]
        },
        {
            url: '/mattress6.jpg',
            title: 'Deluxe 9',
            firstPrice: '93.000',
            secondPrice: '216.00',
            description: 'Бортики из пенополиуретан для ещё лучшей поддержки формы матраса 3д сетка. Средне по жестокости. Размеры под заказ.',
            layers: [
                'Слой термоэластичная пена с эффектом памяти формы',
                'Слой коксовое волокно',
                'Слой термовойлок',
                'Слой блок независимых пружин multipocket 512 пружин на кВ.м ',
                'Слой термовойлок',
                'Слой коксовое волокно',
                'Слой латекс с перфорацией',
            ]
        },
    ]

    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={`Сделать заказ`} body={<CreateOrderToMattress product={productToOrder}/>}/>
            <TitleBlock title={'Матрасы'} subtitle={'Изготовление матрасов'}/>

            <div className={styles.wrapper}>
                {
                    mattresses.map(function (item) {
                        return (
                            <div className={styles.mattress}>
                                <div className={styles.img} style={{backgroundImage: `url(${item.url})`}}></div>
                                <div className={styles.about}>
                                    <div className={styles.header}>
                                        <span className={styles.title}>Матрас {item.title}</span> <br/>
                                        <span className={styles.subtitle}>{item.description}</span> <br/> <br/>
                                        <span className={styles.subtitle}>Слои:</span>

                                        <ol className={styles.layers}>
                                            {
                                                item.layers.map(function (title){
                                                    return(<li>{title}</li>)
                                                })
                                            }
                                        </ol>
                                    </div>

                                    <div>
                                        <span className={styles.price}>От {item.firstPrice}тг до {item.secondPrice}тг</span> <br/>
                                        <span className={styles.subtitle}>Цена зависит от размера</span>
                                        <div className={styles.btnBody}>
                                            <button className={styles.btn} onClick={()=>{
                                                setProductToOrder(item)
                                                setShow(!show)
                                            }}>Заказ</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MatressesBlock;