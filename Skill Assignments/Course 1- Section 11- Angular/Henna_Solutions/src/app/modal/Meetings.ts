
export class Meeting {
    date: Date;
    time: string;
    attending: string;
    category: string;

    constructor(date: Date, time: string, attending: string, category: string) {
        this.date = date;
        this.time = time;
        this.attending = attending;
        this.category = category;
    }

    showMeeting() {
        console.log(this.date.getMonth + " " + this.date.getDay + " " + this.date.getFullYear + " " + this.time + " " + this.attending + " " + this.category);
    }
}