export default function ResultModal({result,targetTime,onCloseModal}){
    return(
        <>
        <div className="modal-overlay">
        <dialog className="result-modal" open >
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime}</strong></p>
            <p>You stopped timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button onClick={()=>{onCloseModal()}}>Close</button>
            </form>
        </dialog>
        </div>
        
        </>
        
        
        
    );
}