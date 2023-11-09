import React, { useState, useEffect } from 'react';

const Watch = () => {
    const [Time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);
    const [resul, setResul] = useState([]); 
    const handleStart = () => {
        clearInterval(timer);
        const newTimer = setInterval(() => setTime(prevTime => prevTime + 10), 10);
        setTimer(newTimer);
    };

    const handleStop = () => {
        clearInterval(timer);
        setTimer(null);
        setResul([...resul, Time]);
    };

    const handleReset = () => {
        clearInterval(timer);
        setTimer(null);
        setTime(0);
        setResul([]); 
    };

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    const milliseconds = String(Time % 100).padStart(2, '0');
    const seconds = String(Math.floor((Time / 100) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((Time / 6000) % 60)).padStart(2, '0');

    return (
        <div className="container">

            <div>{minutes}:{seconds}:{milliseconds}</div>
            <button onClick={handleStart} className="but">Старт.</button>
            <button onClick={handleStop} className="but">Стоп.</button>
            <button onClick={handleReset} className="but">Сброс.</button>


            <ul>
                {resul.map((resul, index) => (
                    <li key={index}>{resul}</li>
                ))}
            </ul>
        </div>
    );
}

export default Watch;
