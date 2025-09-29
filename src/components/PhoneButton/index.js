import styles from  "./styles.module.css"
import {Image} from "react-bootstrap";

const PhoneButton = () => {

    return (
        <a className={styles.container} href={'tel:+77789416981'}> 
            <Image height={32} width={32} src={'/phone-call.png'}/>
        </a>
    )
}

export default PhoneButton;