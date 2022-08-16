class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = "0" + hours
        };
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
        };
        return `${hours}:${minutes}`;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }

    addClock(time, callback, id = null) {
        if (id === null) {
            throw new Error("Передайте идентификатор звонка");
        }
        if (this.alarmCollection.some((x) => (x.id === id))) {
            console.log("Такой звонок уже существует");            
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    };

    removeClock(id) {
        let index = this.alarmCollection.findIndex((elem) => elem.id === id);   
        if (index === -1) {
            return false;
        }
        this.alarmCollection.splice(index, 1);
        return true;
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((x) => {
                    this.checkClock(x);                    
                })
            }, 100);
        }
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach((x) => {
            console.log(x.id, " ", x.time);
        })
    }

    clearAlarms(){
        this.alarmCollection.splice(0, this.alarmCollection.length);
        console.log("все удалены: ");
        console.table(this.alarmCollection);
    }
}

function testCase() {
    let alarmSet = new AlarmClock;

    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
       
    alarmSet.addClock(
        `${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`, () => {
            console.log("Звонок с текущим временем и колбеком вывода текста на консоль, после запуска, функция вывода выполнилась несколько раз.");
        }, "Будильник №1");

    minutes++;

    alarmSet.addClock(
        `${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`, () => {
            console.log("Звонок со временем +1 минута от текущего времени и колбеком: вывода текста на консоль, а так же удалением этого звонка, после запуска функция вывода выполнилась один раз, а потом удалилась.")        
            alarmSet.removeClock("Будильник №2");
    }, "Будильник №2");

    minutes++;

    alarmSet.addClock(
        `${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`, () => {
            console.log("Звонок со временем +2 минуты от текущего времени и колбеком: вывода текста на консоль, а так же остановки всех звонков, очистки всех звонков и выводом всех звонков, после запуска функция вывода выполнилась один раз, потом остановился интервал, все звонки очистились, и ничего не вывелось.");
            alarmSet.stop();
            alarmSet.clearAlarms();
            alarmSet.printAlarms();
    }, "Будильник №3");

    alarmSet.printAlarms();
    alarmSet.start();

}

testCase();