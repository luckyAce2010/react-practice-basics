export default function Person({day}) {
    
    const bools = day === "kendrick";
    const days = bools ? "fall again slowly" : day;

    return (
        <li> 
            {days}
        </li>
    );
}