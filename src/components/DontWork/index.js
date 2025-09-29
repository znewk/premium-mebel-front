import Link from 'next/link';
import styles from './styles.module.css'
import Image from "next/image";

const DontWork = () => {
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                <Image src={'/eyes-1438.png'} height={32} width={32} alt={'eyes'} className={styles.eyes}/>
                <span className={styles.title}>Упс! <br/> Страница не найдена. <Link href={'/'}><a>Вернуть на главную</a></Link></span>
            </div>

        </div>
    )
}

export default DontWork;