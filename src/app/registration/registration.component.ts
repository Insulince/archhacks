import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: "arch-hacks-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  private static readonly BACK_END_BASE_URL: string = "http://localhost:3000";

  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  email: string = "";
  basalRate: string = "";
  carbohydrateRatio: string = "";
  correctionRatio: string = "";
  targetBloodSugar: string = "";
  insulinOnBoarDuration: string = "";

  constructor(private http: Http,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.validCredentials()) {
      const BODY: any = {
        "username": this.username,
        "password": this.password,
        "email": this.email,
        "basalRate": this.basalRate,
        "carbohydrateRatio": this.carbohydrateRatio,
        "correctionRatio": this.correctionRatio,
        "targetBloodSugar": this.targetBloodSugar,
        "insulinOnBoardDuration": this.insulinOnBoarDuration
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

      this.http.post(RegistrationComponent.BACK_END_BASE_URL + "/users/register", BODY, REQUEST_OPTIONS).subscribe(
        (response: Response): void => {
          const RESPONSE_BODY: any = response.json();

          console.log(RESPONSE_BODY);

          this.router.navigate(["/home"]);
        },
        (error: any): void => {
          console.error(error);
        }
      );
    }
  }

  validCredentials(): boolean {
    return true; // TODO (lol)
  }
}
