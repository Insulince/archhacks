import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: "arch-hacks-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private static readonly BACK_END_BASE_URL: string = "http://localhost:3000";

  username: string = "";
  password: string = "";

  constructor(private http: Http,
              private router: Router,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const BODY: any = {
      "username": this.username,
      "password": this.password
    };

    const REQUEST_OPTIONS: RequestOptions = new RequestOptions(
      {
        "headers": new Headers(
          {
            "Content-Type": "application/json"
          }
        )
      }
    );

    this.http.post(LoginComponent.BACK_END_BASE_URL + "/users/login", BODY, REQUEST_OPTIONS).subscribe(
      (response: Response): void => {
        const RESPONSE_BODY: any = response.json();

        console.log(RESPONSE_BODY);

        if (RESPONSE_BODY.success) {
          this.localStorageService.saveValueWithKey("user", JSON.stringify(RESPONSE_BODY.user));
          this.router.navigate(["/home"]);
        } else {
          alert("Invalid credentials, please try again!");
        }
      },
      (error: any): void => {
        console.error(error);
      }
    );
  }
}
