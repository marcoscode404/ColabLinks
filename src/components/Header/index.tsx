import Image from 'next/image'
import styles from './logo.module.css'


export function Header() {
    return (
        <div className={styles.logo}>
           <div className={styles.img}>
                <Image 
                    src="/colabb.jpg" alt="minha logo" 
                    width={180}
                    height={180}
                />
           </div>

            <h1 className={styles.title}>
              Colab Devs
            </h1>

            <strong>Preparando Experimentos!</strong>

        </div>
        
    )
}