import styles from '../styles/components/Profile.module.css';
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/https-luana.png" alt="" />

            <div>
                <strong>Luana</strong>

                <p> <img src="icons/level.svg" alt="" />
                    Level 0
                </p>
            </div>
        </div>
    )
}