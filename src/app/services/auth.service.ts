import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";

@Injectable()
export class AuthService {

    public authToken: any;
    public user: Object;
    public currentUser: Object;

    constructor(public httpService: HttpService){

    }

    registerUser(user: Object): Observable<any> {
        return this.httpService.post('/users/register', user, {'Content-Type': 'application/json'});
    }

}