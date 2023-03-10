import React, { useState, useEffect } from 'react';

export const Clock = ({ state, setState }) => {

    const [displayTime, setDisplayTime] = useState({ minute: state.sessionTime, second: state.seconds });
    useEffect(() => {
        console.log("reset")
        setDisplayTime({ minute: state.sessionTime, second: state.seconds })
    }, [state.resetCount])

    useEffect(() => {
        if (state.currentTimer == 'Session') {
            setDisplayTime({
                minute: state.sessionTime,
                second: 0
            })
        } else {
            setDisplayTime({
                minute: state.breakTime,
                second: 0
            })
        }
    }, [state.sessionTime, state.breakTime, state.currentTimer])

    useEffect(() => {
        // console.log(state.play)
        let myInterval;
        if (state.play) {
            myInterval = setInterval(() => {
                setDisplayTime(displayTime => {
                    if (displayTime.second <= 0) {
                        if (displayTime.minute == 0) {
                            console.log('Transition');
                            let beep = document.getElementById('beep');
                            beep.play();
                            setState(state => ({
                                ...state,
                                currentTimer: (state.currentTimer == 'Session') ? ('Break') : ('Session')
                            }))
                            return {
                                minute: displayTime.minute,
                                second: displayTime.second
                            }
                        }
                        else if (displayTime.minute < 0) {
                            setState(state => ({
                                ...state,
                                sessionTime: 1
                            }))
                            return {
                                minute: displayTime.minute,
                                second: displayTime.second
                            }
                        }
                        else {
                            return {
                                minute: displayTime.minute - 1,
                                second: 59
                            }
                        }
                    }
                    else {
                        return {
                            minute: displayTime.minute,
                            second: displayTime.second - 1
                        }
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

    let FormattedTime = (min, sec) => {
        let dMin = (min < 10) ? (`0${min}`) : (`${min}`);
        let dSec = (sec < 10) ? (`0${sec}`) : (`${sec}`);
        return `${dMin}:${dSec}`;
    }

    return (
        <div className='clock'>
            <div className="clock-time-type" id='timer-label'>{state.currentTimer}</div>
            <div className="clock-time" id='time-left'>{FormattedTime(displayTime.minute, displayTime.second)}</div>
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