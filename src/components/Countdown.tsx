
import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '@/contexts/CountdownContext';


export function Countdown(){
    const { minutes, 
            seconds, 
            hasFinished, 
            isActive, 
            startCountDown, 
            resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
      <>
        <div className={styles.countdown}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
        </div>
  
        { hasFinished ? (
          <button
            disabled
            className={styles.countdownButtonActive} 
          >
            Ciclo encerrado
          </button>
        ) : (
          <>
          { isActive ? (
            <button 
              type="button"
              className={'${styles.countdownButton} ${styles.countdownButtonActive}'}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type="button"
              className={styles.countdownButton} 
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
          </>
        ) }   
        </>
    );
}