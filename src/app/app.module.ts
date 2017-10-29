import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {DropdownComponent} from "./home/dropdown/dropdown.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpService} from "./services/http.service";
import {DataBridgeService} from "./services/data-bridge.service";
import {MealItemComponent} from "./meal-item/meal-item.component";
import {LocalStorageService} from "./services/local-storage.service";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownComponent,
    RegistrationComponent,
    MealItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, HttpService, DataBridgeService, LocalStorageService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
