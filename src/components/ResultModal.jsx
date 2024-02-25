import {forwardRef} from 'react';
import { createPortal } from 'react-dom';


 const ResultModal = forwardRef(function ResultModal({result,targetTime,onCloseModal,remainigTime},ref){

    const remainigTimeInSeconds = (remainigTime/1000).toFixed(2);//konvertujemo preostalo vreme iz milisekundi u sekunde
    const score = Math.round((1-remainigTime/(targetTime*1000))*100);//postavljamo varijablu koja racuna skor na osnovu toga kada smo pauzirali tajmer
    const youLost = remainigTime <= 0;//proveravamo da li smo izgubili ili ne

    return createPortal( //postavljanje portala, prvi parametar je jsx kod komponente 
        
        <dialog ref={ref} className="result-modal"  >
            {youLost ?<h2>You {result} </h2> : <h2>Your result {score}</h2> }
            <p>The target time was <strong>{targetTime}</strong></p>
            <p>You stopped timer with <strong>{remainigTimeInSeconds} seconds left.</strong></p>
            <form method="dialog">
                <button onClick={()=>{onCloseModal()}}>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")//drugi parametar je mesto gde zelimo da renderujemo ovu komponentu zapravo
        
    );
}
)
export default ResultModal;