import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {DropdownComponent} from "./home/dropdown/dropdown.component";
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpService} from "./services/http.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
