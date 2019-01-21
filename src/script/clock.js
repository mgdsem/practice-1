class Clock {
    constructor() {
        this.clockDisplay = document.getElementById('clock');
        this.generateCurrentTime = this.generateCurrentTime.bind(this);
        this.generateCurrentTime();
        setInterval(this.generateCurrentTime, 1000);
    }
    generateCurrentTime() {
        const date = new Date();
        const hour = this.withZeroPrefix(date.getHours());
        const minute = this.withZeroPrefix(date.getMinutes());
        const second = this.withZeroPrefix(date.getSeconds());
        const currentTime = `${hour}:${minute}:${second}`;
        this.clockDisplay.innerText = currentTime;
    }
    withZeroPrefix(value) {
        return value >= 10 ? value : `0${value}`;
    }
}
export default Clock;