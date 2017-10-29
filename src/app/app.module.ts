import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {DropdownComponent} from "./home/dropdown/dropdown.component";
import {DataBridgeService} from "./services/data-bridge.service";
import {MealItemComponent} from "./meal-item/meal-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownComponent,
    MealItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataBridgeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
