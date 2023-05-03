

export class MyService {


    checkUser(login: any): boolean {
        if (login.email == "csswartzell@gmail.com" && login.password == "123") {
            return true;
        } else {
            return false;
        }
    }
}