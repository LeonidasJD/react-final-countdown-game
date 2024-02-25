import { useState,useRef } from "react";
import ResultModal from './ResultModal.jsx';



export default function TimerChallange({title, targetTime}){

    const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000);
 

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;


    const timer = useRef();
    const modal = useRef();

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        modal.current.showModal();
    }

    function onHandleStart(){/**funkcija se izvrsava klikom na "Start challenge" */
        
        timer.current = setInterval (()=> {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10);//timer koji odbrojava sekunde
        },10)
        
    }

    function onHandleStop(){/**funkcija se izvrsava klikom na "Stop challenge" */
        clearInterval(timer.current);//clear interval funkcija zaustavlja timer ne resetuje vrednost, vec ga pauzira i dobijamo onu vrednost koja je preostala od odbrojavanja
        modal.current.showModal();
    }

    function onCloseModal(){/**funkcija se izvrsava klikom na "Close" modala i resetuje timer */
       setTimeRemaining(targetTime*1000);//postavljamo ponovo pocetno stanje sto znaci da tajmer nije aktivan tj resetujemo tajmer 
       
    }

    

    return(
        <>
        
        <ResultModal ref={modal} onCloseModal={onCloseModal} targetTime={targetTime} result={timerIsActive ? 'won' : 'lost'} remainigTime={timeRemaining} />{/**postavljn target time iz TimerChallange */}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ''}</p>
            <p>
                <button onClick={timerIsActive ? onHandleStop : onHandleStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerIsActive ? "active" : ""}>
                {timerIsActive ? "Timer is runing..." : "Timer Inactive"}
            </p>
        </section>
        </>
    );
}