import React, { Component } from 'react'
import { Clock } from './AltClock'
import TimeSetter from './TimeSetter'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breakTime: 5,
            sessionTime: 25,
            currentTimer: 'Session',
            seconds: 0,
            play: false,
            resetCount: 0
        }
        //so that functions can use this inside it
        this.handleReset = this.handleReset.bind(this);
        this.handlePausePlay = this.handlePausePlay.bind(this);
        this.setState = this.setState.bind(this)
    }



    handleReset() {
        this.setState(state => ({
            breakTime: 5,
            sessionTime: 25,
            currentTimer: 'Session',
            seconds: 0,
            play: false,
            displayTime: { minute: 25, second: 0 },
            resetCount: state.resetCount + 1
        }))
    }
    handlePausePlay() {
        this.setState(state => ({
            ...state,
            play: !state.play
        }))
    }
    render() {
        return (
            <div className='timer-wrapper'>
                <h1 className="heading">25 + 5 Clock</h1>

                <TimeSetter state={this.state} setState={this.setState} />

                <Clock state={this.state} />

                <div className="reset-buttons">
                    <button className='buttons' onClick={this.handlePausePlay}> <i className="fa fa-play fa-2x"></i><i className="fa fa-pause fa-2x"></i></button>
                    <button className='buttons fa fa-refresh fa-2x' onClick={this.handleReset}></button>
                </div>
            </div>
        )
    }
}
