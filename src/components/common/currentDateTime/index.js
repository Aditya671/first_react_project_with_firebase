import {useState,useEffect} from 'react';
const CurrentDateTime = () => {
    const [currentTime,setCurrentTime] = useState(new Date());
    const options = {
        weekday: "short",
        year: "numeric",
        month:"short",
        day:"2-digit"
        }
    useEffect(() => {
        const timer = setInterval(e => setCurrentTime(new Date()),1000);
        return() => {
            clearInterval(timer)
        }
    },[]);
    return(
        <div>{currentTime.toLocaleTimeString()} &nbsp; 
        {currentTime.toLocaleDateString("en-US",options)}</div>
        );
}
export default CurrentDateTime;