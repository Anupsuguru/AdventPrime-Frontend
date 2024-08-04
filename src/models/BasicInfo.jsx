export class BasicInfo {
    no_of_workshop_attended= 0
    no_of_workshop_waitlisted= 0
    no_of_workshop_scheduled= 0
    preferences= []

    constructor(data) {
        this.no_of_workshop_attended = data.content.no_of_workshop_attended
        this.no_of_workshop_waitlisted = data.content.no_of_workshop_waitlisted
        this.no_of_workshop_scheduled = data.content.no_of_workshop_scheduled
        this.preferences = data.content.preferences

    }

}