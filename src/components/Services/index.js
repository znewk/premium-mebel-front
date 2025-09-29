import styles from './style.module.css'
import {useEffect, useState} from "react";
import TitleBlock from "../TitleBlock";
import classnames from 'classnames'
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationToProduct from "../Forms/CreateApplicationToProduct";
import WhyUsBeds from "../WhyUsBeds";

const Services = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [furniture, setFurniture] = useState([
        {
            toRest: true,
            title: 'Стулья',
            oldPrice: '10.000 тг',
            price: '8.000',
            url: '/services1.png'
        },
        {
            toRest: true,
            title: 'Диваны',
            oldPrice: '70.000 тг',
            price: '50.000',
            url: '/services2.jpg'
        },
        {
            toRest: true,
            title: 'Кресла',
            oldPrice: '40.000 тг',
            price: '30.000',
            url: '/services3.png'
        },
        {
            toRest: true,
            title: 'Диван двойка',
            oldPrice: '60.000 тг',
            price: '45.000',
            url: '/services4.jpg'
        },
        {
            toRest: true,
            title: 'Подлокотники',
            oldPrice: '15.000 тг',
            price: '10.000',
            url: '/services6.jpg'
        },
        {
            toRest: true,
            title: 'Угловые диваны',
            oldPrice: '100.000 тг',
            price: '80.000',
            url: '/services5.jpg'
        },
    ])

    const [beds, setBeds] = useState([
        {
            title: 'Двухспальная кровать',
            bed: true,
            subtitle: 'Изготовление двуспальных кроватей с подъёмным механизмом.',
            headrestSize: '120 сантиметров',
            sleepingPlaceSize: [
                {
                    title: '160/200'
                },
                {
                    title: '180/200'
                },
                {
                    title: '200/200'
                },
            ],
            oldPrice: '280.000 тг',
            price: '240.000',
            url: '/services7.jpeg'
        },

        {
            title: 'Односпальная кровать',
            bed: true,
            subtitle: 'Изготовление односпальных кроватей. Полностью мягкий и экологичный каркас.',
            headrestSize: '120 сантиметров',
            sleepingPlaceSize: [
                {
                    title: '90/200'
                },
                {
                    title: '120/200'
                },
            ],
            oldPrice: '240.000 тг',
            price: '200.000',
            url: '/services8.jpg'
        },
    ])

    const [productToOrder, setProductToOrder] = useState({})

    return (
        <div className={styles.container} style={{paddingTop: 0}}>
            <ModalWindow show={show} handleClose={handleClose} heading={`Сделать заказ`} body={<CreateApplicationToProduct product={productToOrder}/>}/>

            {
                props.onlyBeds ? null : (
                    <>
                        <TitleBlock centerMode={true} whiteMode={false} title={'Заказать реставрацию'} subtitle={'Цена может розниться в зависимости от объема работ, для точной оценки свяжитесь с нами по телефону'}/>
                        <div className={styles.wrapper}>
                            {furniture.map(item => (
                                <div className={styles.block}>
                                    <div className={styles.img} style={{backgroundImage: `url(${item.url})`}}>
                                        <div className={styles.backHover}>
                                            <button className={styles.whiteBtn} onClick={()=> {
                                                setProductToOrder(item)
                                                setShow(!show)
                                            }}>Более подробно</button>
                                        </div>
                                    </div>
                                    <div className={styles.blockFooter}>
                                        <div className={styles.footer}>
                                            <span className={styles.blockTitle}>
                                                <span>{item.title}</span>
                                                <span className={styles.blockName}>Реставрация</span>
                                            </span>
                                            <br/>
                                            <span className={styles.blockSubtitle}>
                                                <span style={{textDecoration: 'line-through'}}>{item.oldPrice}</span> от {item.price}тг
                                            </span>
                                        </div>
                                        <div className={styles.btnBody}>
                                            <button className={styles.btn} onClick={()=> {
                                                setProductToOrder(item)
                                                setShow(!show)
                                            }}>Узнать больше</button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </>
                )
            }
            {
                props.onlyRestoration ? null : (
                    <>
                        <hr/>
                        <div id={'beds'}></div>
                        <WhyUsBeds paddingZero={true}/>
                        <TitleBlock title={props.num ? 'Заказ новых кроватей' : 'Заказ новых кроватей'}
                                    subtitle={''} bed={true}
                        />
                        <div className={styles.wrapper}>
                            {beds.map(item => (
                                <div className={classnames(styles.block, styles.bedBlock)}>
                                    <div className={styles.img} style={{backgroundImage: `url(${item.url})`}}>
                                        <div className={styles.backHover}>
                                            <button className={styles.whiteBtn} onClick={()=> {
                                                setProductToOrder(item)
                                                setShow(!show)
                                            }}>Более подробно</button>
                                        </div>
                                    </div>
                                    <div className={styles.blockFooter}>
                                        <div className={styles.footer}>
                                            <span className={styles.blockTitle}>{item.title}</span>
                                            <span className={styles.blockSubtitle} style={{fontFamily: 'Rubik Regular'}}>
                                            {item.subtitle}
                                            </span>
                                                <span  style={{fontFamily: 'Rubik Regular'}} >
                                                Размер изголовья <span className={styles.blockSubtitle} style={{display: 'inline-block'}}>{item.headrestSize}</span>.
                                            </span> <br/>
                                            <span  style={{fontFamily: 'Rubik Regular'}} >
                                                Размер спального места: <br/>
                                                    <span className={styles.blockSubtitle} style={{display: 'inline-block'}}>
                                                        {item.sleepingPlaceSize.map(size => <>
                                                            <span>{size.title}см</span> <br/>
                                                        </>)}
                                                </span>
                                            </span>
                                            </div>
                                            <div className={styles.footer}>
                                                <span className={styles.blockSubtitle}>
                                                <span style={{textDecoration: 'line-through'}}>{item.oldPrice}</span> от {item.price}тг</span>
                                            </div>
                                            <div className={styles.btnBody}>
                                                <button className={styles.btn} onClick={()=> {
                                                    setProductToOrder(item)
                                                    setShow(!show)
                                                }}>Узнать больше</button>
                                            </div>
                                    </div>


                                </div>
                            ))}

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Services;