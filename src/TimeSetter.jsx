import React from 'react'

const TimeSetter = ({ state, setState }) => {

    const handleSessionIncreament = () => {
        // console.log("Session increament called");
        setState(state => ({
            ...state,
            sessionTime: state.sessionTime + 1
        }))
        // console.log("Session increament finished");
    }
    const handleSessionDecreament = () => {
        setState(state => ({
            ...state,
            sessionTime: state.sessionTime - 1
        }))
    }
    const handleBreakIncreament = () => {
        setState(state => ({
            ...state,
            breakTime: state.breakTime + 1
        }))
    }
    const handleBreakDecreament = () => {
        setState(state => ({
            ...state,
            breakTime: state.breakTime - 1
        }))
    }

    return (
        <div className='time-setter'>
            <div className="break">
                <div className="label-text">Break Length</div>
                <button className="buttons fa fa-arrow-down fa-2x" onClick={handleBreakDecreament}></button>
                <div className="type-display label-text">{state.breakTime}</div>
                <button className="buttons fa fa-arrow-up fa-2x" onClick={handleBreakIncreament}></button>
            </div>
            <div className="session">
                <div className="label-text">Session Length</div>
                <button className="buttons fa fa-arrow-down fa-2x" onClick={handleSessionDecreament}></button>
                <div className="type-display label-text">{state.sessionTime}</div>
                <button className="buttons fa fa-arrow-up fa-2x" onClick={handleSessionIncreament}></button>
            </div>
        </div>
    )
}

export default TimeSetter;
