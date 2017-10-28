import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {NDB_Item, NDB_Response} from "../model/ndb-response";
import {DropdownItem} from "./dropdown/dropdown-item";

@Component({
  selector: "arch-hacks-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private static readonly BACK_END_BASE_URL: string = "http://localhost:3000";

  searchString: string = "";
  dropdownItems: Array<DropdownItem> = [];

  constructor(private http: Http) {
  }

  ngOnInit(): void {
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
        const RESPONSE_BODY: string = response.json();

        const NDB_RESPONSE: NDB_Response = new NDB_Response(RESPONSE_BODY);

        console.log(NDB_RESPONSE);

        this.updateDropdown(NDB_RESPONSE);
      },
      (error: any): void => {
        console.error(error);
      }
    );
  }

  updateDropdown(NDBResponse: NDB_Response): void {
    this.dropdownItems = [];

    NDBResponse.list.item.forEach(
      (item: NDB_Item): void => {
        const X: DropdownItem = new DropdownItem(item.name, null, null);
        this.dropdownItems.push(X);
      }
    );
  }

  submitSearch(): void {

  }
}

