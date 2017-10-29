import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {HttpService} from "../services/http.service";
import { User } from '../model/user';

@Component({
  selector: 'arch-hacks-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userForm: FormGroup;
  public emailRegex: string = "[^ @]*@[^ @]*"
  public user: User = {
    email: '',
    username: '',
    password: '',
    basalRate: 0,
    carbRatio: 0,
    correctionRatio: 0,
    IOBDuration: 0
  }

  constructor(public fB: FormBuilder,
              public authService: AuthService,
              public router: Router,
              public httpService: HttpService) {  
  }

  ngOnInit() {
      this.userForm = this.fB.group({
          'username': new FormControl('', Validators.compose([
              Validators.required,
              Validators.minLength(6)
          ])),
          'email': new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern(this.emailRegex)
          ])),
          'password': new FormControl('', Validators.compose([
              Validators.required,
              Validators.minLength(6)
          ])),
          'basalRate': new FormControl(''),
          'carbRatio': new FormControl(''),
          'correctionRatio': new FormControl({}),
          'IOBDuration': new FormControl({})
      });
  }

  onRegisterSubmit(value){
    this.user = value;
    this.authService.registerUser(this.user)
            .subscribe(
                (data: any): void => {
                    if (data.success) {
                        let body: any = {
                            email: this.user.email,
                            username: this.user.username,
                            password: this.user.password,
                            basalRate: this.user.basalRate,
                            carbRatio: this.user.carbRatio,
                            correctionRatio: this.user.correctionRatio,
                            IOBDuration: this.user.IOBDuration
                        };
                    } 
                },
            );
  }
}
