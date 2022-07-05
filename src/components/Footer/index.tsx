import  React  from 'react';
import { AiFillRocket } from 'react-icons/ai';

import styles from './footer.module.css'

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <a
                
                target="_blank"
                rel="noopener noreferrer"
                >
               @ColabDevs<AiFillRocket /> 🚀🌃  
                
                </a>
            </footer>
        </>
    )
}