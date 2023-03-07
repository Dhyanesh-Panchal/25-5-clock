import React from 'react'

const TimeSetter = ({ state, setState }) => {

    const handleSessionIncreament = () => {
        // console.log("Session increament called");
        if (state.sessionTime < 60) {
            setState(state => ({
                ...state,
                sessionTime: state.sessionTime + 1
            }))
        }
        // console.log("Session increament finished", state.sessionTime);
    }
    const handleSessionDecreament = () => {
        if (state.sessionTime > 1) {
            setState(state => ({
                ...state,
                sessionTime: state.sessionTime - 1
            }))
        }
        console.log("Session time is:" + state.sessionTime);
    }
    const handleBreakIncreament = () => {
        if (state.breakTime < 60) {
            setState(state => ({
                ...state,
                breakTime: state.breakTime + 1
            }))
        }
    }
    const handleBreakDecreament = () => {
        if (state.breakTime > 1) {
            setState(state => ({
                ...state,
                breakTime: state.breakTime - 1
            }))
        }
    }

    return (
        <div className='time-setter'>
            <div className="break">
                <div className="label-text" id='break-label'>Break Length</div>
                <button className="buttons fa fa-arrow-down fa-2x" onClick={handleBreakDecreament} id='break-decrement'></button>
                <div className="type-display label-text" id="break-length">{state.breakTime}</div>
                <button className="buttons fa fa-arrow-up fa-2x" onClick={handleBreakIncreament} id='break-increment'></button>
            </div>
            <div className="session">
                <div className="label-text" id='session-label'>Session Length</div>
                <button className="buttons fa fa-arrow-down fa-2x" onClick={handleSessionDecreament} id='session-decrement'></button>
                <div className="type-display label-text" id="session-length">{state.sessionTime}</div>
                <button className="buttons fa fa-arrow-up fa-2x" onClick={handleSessionIncreament} id='session-increment'></button>
            </div>
        </div>
    )
}

export default TimeSetter;
