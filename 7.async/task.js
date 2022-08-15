class AlarmClock {
    constructor(alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('error text'); 
        }
        for (let i=0; i<this.alarmCollection.length; i++){
            if (this.alarmCollection[i].id === id) {
                console.error("Будильник с таким id уже существует");
                return;
            }
        }           
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        
         for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id === id) {               
              return this.alarmCollection.splice([i], 1); 
            } 
      }        
    }

    getCurrentFormattedTime() {
        let now = new Date();
        const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
        let nowTime = `${hours}:${minutes}`;
        return nowTime;
    }

    start(){
       const checkClock = alarm => {
        if (this.alarmCollection.time === this.getCurrentFormattedTime()){
            this.alarmCollection.callback;
        }
       }
       if (this.timerId === null) {
        this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000)
       }
    }

    stop (){
        if (this.timerId !== null) {
            this.timerId = null;
           }
    }

    printAlarms (){
        this.alarmCollection.forEach(() => {
            this.alarmCollection.id = id;
            this.alarmCollection.time = time;
            console.log({id, time})
        }) 
    }

    clearAlarms (){
        this.stop();
        this.alarmCollection = [];
    }
}