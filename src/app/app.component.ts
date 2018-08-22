import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from './other/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts';


  isAuth: boolean;

  constructor(private auth: AuthService) {
    this.auth.authEm.subscribe(value => this.isAuth = value);
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.auth.setTrue(localStorage.getItem('token'));
    }
  }



  onLogOut() {
    if (this.auth.getState()) {
      this.auth.setFalse();
      console.log(this.auth.getState());
    }
  }
}
