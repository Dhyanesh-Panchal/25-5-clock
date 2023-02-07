import React, { useState, useEffect } from 'react'

export const Clock = ({ state }) => {
    const [minutes, setMinutes] = useState(state.sessionTime);
    const [seconds, setSeconds] = useState(state.seconds);
    console.log(minutes, seconds)
    useEffect(() => {

        if (state.currentTimer == 'Session') {
            setMinutes(state.sessionTime);
            setSeconds(0);
        } else {
            setMinutes(state.breakTime);
            setSeconds(0);
        }
    }, [state.sessionTime, state.breakTime])

    useEffect(() => {
        console.log(state.play)
        let myInterval;
        if (state.play) {
            myInterval = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds <= 0) {
                        setMinutes(minutes => minutes - 1)
                        return 59;
                    } else {
                        return seconds - 10
                    }
                })
            }, 1000)
        }
        // This is an Anonoynomus function, It runs when this useEffect unmounts.
        return () => {
            //setInterval return an ID , and clearInterval closes the interval of the ID.
            clearInterval(myInterval)
        }

    }, [state.play])
    return (
        <div className='clock'>
            <div className="clock-time-type">{state.currentTimer}</div>
            <div className="clock-time">{minutes}:{seconds}</div>
        </div>
    )
}


/**
 * play:false->true,
 *      useEffect-> if ->setInterval -> return clearInterval
 * 
 * play: true->false
 *       runs old clearInterval -> if (not passed)-> return clearInterval (second time)  
 */