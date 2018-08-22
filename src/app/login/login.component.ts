import {Component, OnInit} from '@angular/core';
import {HttpProvider} from '../other/http.provider';
import {ErrorModel} from '../other/error.model';
import {TokenModel} from '../other/token.model';
import {AuthService} from '../other/auth.service';
import {Router} from '@angular/router';
import {debounceTime, delay} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  textErr: string = null;
  textSucc: string = null;
  err: boolean = false;
  suc: boolean = false;


  constructor(private httpProvider: HttpProvider, private auth: AuthService, private router: Router) {
  }


  ngOnInit() {

  }

  onLogin() {
    this.httpProvider.login(this.email, this.password)
      .subscribe((value: TokenModel) => {console.log(value.token), this.auth.setTrue(value.token), this.textSucc = 'Success', this.suc = true, this.err = false, this.router.navigate(['/contacts'])}, (err: ErrorModel) => {
        console.log(err.error.error.message);
        this.textErr = JSON.parse(err.error.error.message).message;
        this.err = true;
        this.suc = false;
        this.auth.setFalse();
        console.log(JSON.parse(err.error.error.message).message);

      });
/*    if (this.textErr != null) {
      this.err = true;
    } else {
      this.suc = true;
    }*/
    this.email = '';
    this.password = '';

  }

  onReg() {
    this.httpProvider.registration(this.email, this.password).subscribe(
      (value: TokenModel) => {
        this.auth.setTrue(value.token);
        this.textSucc = 'Success';
        this.suc = true;
        this.err = false;
        this.router.navigate(['/add']);
      },
      (err: ErrorModel) => {
        console.log(JSON.parse(err.error.error.message).message);
        console.log(err.status);
        this.textErr = JSON.parse(err.error.error.message).message;
        this.err = true;
        this.suc = false;
      });
    this.email = '';
    this.password = '';
  }

}
