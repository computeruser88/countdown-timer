import React, { Component } from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            time_up: ""
        }
        this.x = null
        this.deadline = null
    }
    count() {
        const now = new Date().getTime();
        const t = this.deadline - now;
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({ days, hours, minutes, seconds })
        if (t < 0) {
            clearInterval(this.x);
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, time_up: "Time is up" });
        }
    }

    componentDidMount() {
        this.deadline = new Date("apr 14, 2019 00:00:00").getTime();
        this.x = setInterval(this.count, 1000);
    }

    render() {
        const { days, hours, minutes, seconds, time_up } = this.state;
        return (
            <div>
                <h1>Countdown Clock</h1>
                <div id="clockdiv">
                    <div>
                        <span className="days" id="day">{days}</span>
                        <div className="smalltext">Days</div>
                    </div>
                    <div>
                        <span className="hours" id="hour">{hours}</span>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div>
                        <span className="minutes" id="minute">{minutes}</span>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                        <span className="seconds" id="second">{seconds}</span>
                        <div className="smalltext">Seconds</div>
                    </div>
                    <div><br />until Wanda's birthday and Game of Thrones Season 8!</div>
                </div>
                <p id="demo">{time_up}</p>
            </div>
        );
    };
}

export default Countdown;
