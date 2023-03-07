import React, { Component } from 'react'
import { Clock } from './Clock'
import TimeSetter from './TimeSetter'
import beep from '../public/Beep.mp3';

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

        let beep = document.getElementById('beep');
        beep.pause();
        beep.currentTime = 0;
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

                <Clock state={this.state} setState={this.setState} />

                <div className="reset-buttons">
                    <button className='buttons' onClick={this.handlePausePlay} id='start_stop'> <i className="fa fa-play fa-2x"></i><i className="fa fa-pause fa-2x"></i></button>
                    <button className='buttons fa fa-refresh fa-2x' onClick={this.handleReset} id="reset"></button>
                </div>
                <audio src={beep} id='beep' />
            </div>
        )
    }
}
