import { useState,useRef } from "react";
import ResultModal from './ResultModal.jsx';



export default function TimerChallange({title, targetTime}){

    let [timeStarted, setTimeStarted] = useState(false);/*proveravamo da li je pokrenut tajmer*/
    let [timerExpired,setTimerExpired] = useState(false);/*proveravamo da li je istekao tajmer*/


    const timer = useRef();

    function onHandleStart(){/**funkcija se izvrsava klikom na "Start challenge" */
        setTimeStarted(true);

        timer.current = setTimeout(()=> {
            setTimerExpired(true);
            
        },targetTime * 1000)
    }

    function onHandleStop(){/**funkcija se izvrsava klikom na "Stop challenge" */
        clearTimeout(timer.current);
        setTimeStarted(false);
        setTimerExpired(false);
    }

    function onCloseModal(){/**funkcija se izvrsava klikom na "Close" modala i resetuje timer */
        setTimerExpired(false);
        setTimeStarted(false);
        
    }

    return(
        <>
        {timerExpired ? <ResultModal onCloseModal={onCloseModal} targetTime={targetTime} result={"lost"} /> : null }{/**postavljn target time iz TimerChallange */}
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired ? <p>You Lost</p> : ''}
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ''}</p>
            <p>
                <button onClick={timeStarted ? onHandleStop : onHandleStart}>{timeStarted ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timeStarted ? "active" : ""}>
                {timeStarted ? "Timer is runing..." : "Timer Inactive"}
            </p>
        </section>
        </>
    );
}