import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {

    public static host = 'localhost';
    public static port = 3000;
    public static url = "http://" + HttpService.host + ":" + HttpService.port;
    
    constructor(public http: Http){}

    get (endpoint: string, headersObject: Object = {}): Observable<any> {
        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.get(HttpService.url + endpoint, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    }

    post(endpoint: string, body: any = {}, headersObject: Object = {}): Observable<any> {
        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.post(HttpService.url + endpoint, body, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    }

}