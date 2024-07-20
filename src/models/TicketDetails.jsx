
export class TicketDetails {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.conductor = data.conductor;
        this.address = data.address;
        this.time = data.time;
        this.day = data.day;
        this.datenum = data.datenum;
        this.datemo = data.datemo;
    }
}