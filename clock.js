class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    
    this.hour = new Date().getHours();
    this.minute = new Date().getMinutes();
    this.second = new Date().getSeconds();
    this.printTime();
    window.setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.second++;
    if (this.second === 60) {
      this.minute ++;
      this.second = 0;
    };
    if (this.minute === 60) {
      this.hour ++;
      this.minute = 0;
    }
    if (this.hour === 24) {
      this.hour = 0;
    }

    this.printTime();
  }
}

const clock = new Clock();