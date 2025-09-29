import styles from './style.module.css'
import classnames from "classnames"
import {Image} from "react-bootstrap";

const TitleBlock = ({subtitle, title, bed, ...props}) => {
    return (
        <div className={styles.container}>
            {/*<Image src={img} className={styles.img}/>*/}
            <span className={classnames(styles.title, props.howWeWork ? styles.litle : null)} style={{color: props.whiteMode ? 'white' : 'black'}}>{title}</span>
            <br/>
            <span className={styles.subtitle} style={{color: props.whiteMode ? 'white' : 'black'}}>{subtitle}</span>

            {bed && (
                <>
                    <span className={styles.subtitle} style={{color: props.whiteMode ? 'white' : 'black'}}>
                    Гипоаллергенный материал и антивандальная ткань. <br/>
                    Гарантия на качество работы производителей 1 год. <br/>
                    Комплектация по вашему желанию: Подъёмный механизм, бельевой ящик, ножки, приобретаются отдельно.
                </span>
                </>

            )}

        </div>
    )
}

export default TitleBlock;