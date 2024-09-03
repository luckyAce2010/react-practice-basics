export default function Person({day, soldout}) {
    
    //Javascript function
    function handleClick() {
        console.log(day);
    }

    //Practice conditional formatting
    return (
        <li> 
            {day === "kendrick" ? "fall again slowly" : day}
            {soldout ? <p> Not Soldout </p> : <h2> Soldout </h2>}
            <button onClick={handleClick}> Click this button </button>
        </li>
    );
}