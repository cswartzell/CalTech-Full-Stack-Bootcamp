export class MyService {

    checkUser(login: any): boolean {
        if (login.email == "cam@email.com" && login.password == "12d") {
            return true;
        } else  {
            return false;  
        }
    }
}