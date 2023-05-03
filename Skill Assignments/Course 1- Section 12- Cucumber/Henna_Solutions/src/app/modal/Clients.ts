export class Client {
    name: string;
    project: string;
    phone: string;
    email: string;

    constructor(name: string, project: string, phone: string, email: string) {
        this.name = name;
        this.project = project;
        this.phone = phone;
        this.email = email;
    }

    showClient() {
        console.log(this.name + " " + this.project + " " + this.phone + " " + this.email);
    }
}