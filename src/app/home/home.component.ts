import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {DropdownItem} from "./dropdown/dropdown-item";
import {Router} from "@angular/router";
import {NDB_Search_Item, NDB_Search_Response} from "../model/ndb-search-response";
import {NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
import {DataBridgeService} from "../services/data-bridge.service";
import {LocalStorageService} from "../services/local-storage.service";
import {User} from "../model/user";

@Component({
  selector: "arch-hacks-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private static readonly BACK_END_BASE_URL: string = "http://localhost:3000";

  searchString: string = "";
  dropdownItems: Array<DropdownItem> = [];
  loggedIn: boolean = false;
  user: User = null;

  constructor(private http: Http,
              private router: Router,
              private dataBridgeService: DataBridgeService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.fetchValueFromKey("user"));
    console.log(this.user);
    this.loggedIn = this.user != null;
  }

  querySearchString(): void {
    const BODY: any = {
      "key": this.searchString
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

    this.http.post(HomeComponent.BACK_END_BASE_URL + "/suggestedSearch", BODY, REQUEST_OPTIONS).subscribe(
      (response: Response): void => {
        const RESPONSE_BODY: any = response.json();

        const NDB_SEARCH_RESPONSE: NDB_Search_Response = new NDB_Search_Response(RESPONSE_BODY);

        console.log(NDB_SEARCH_RESPONSE);

        this.updateDropdown(NDB_SEARCH_RESPONSE);
      },
      (error: any): void => {
        console.error(error);
      }
    );
  }

  updateDropdown(NDBResponse: NDB_Search_Response): void {
    this.dropdownItems = [];

    NDBResponse.list.item.forEach(
      (item: NDB_Search_Item): void => {
        const X: DropdownItem = new DropdownItem(item.name, item);
        this.dropdownItems.push(X);
      }
    );
  }

  submitSearch(ndbno: string): void {
    const BODY: any = {
      "key": ndbno
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

    this.http.post(HomeComponent.BACK_END_BASE_URL + "/nutrition", BODY, REQUEST_OPTIONS).subscribe(
      (response: Response): void => {
        const RESPONSE_BODY: any = response.json();

        const NDB_NUTRITION_RESPONSE: NDB_Nutrition_Response = new NDB_Nutrition_Response(RESPONSE_BODY);
        console.log(NDB_NUTRITION_RESPONSE);

        this.router.navigate(["/meal-item"]).then(
          (successfulNavigation: boolean): void => {
            if (successfulNavigation) {
              this.dataBridgeService.updateMealItem(NDB_NUTRITION_RESPONSE);
            } else {
              console.error("Unsuccessful navigation!");
            }
          }
        );
      },
      (error: any): void => {
        console.error(error);
      }
    );
  }

  register(): void {
    this.router.navigate(["/registration"]);
  }

  login(): void {
    this.router.navigate(["/login"]);
  }

  logout(): void {
    this.localStorageService.clearAll();
    window.location.reload();
  }

  clickedBody(): void {
    document.getElementById("dropdown-wrapper").style.display = "none";
  }

  clearStorage(): void {
    this.localStorageService.clearAll();
  }
}

