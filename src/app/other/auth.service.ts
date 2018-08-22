import {TokenModel} from './token.model';
import {EventEmitter, OnInit, Output} from '@angular/core';

export class AuthService implements OnInit {
  private isAuth: boolean = false;
  private token: string = null;
  authEm: EventEmitter<boolean> = new EventEmitter<boolean>();


  public getState(): boolean {
    return this.isAuth;
  }

  public getToken(): string {
    return this.token;
  }

  public setTrue(token: string) {
    this.isAuth = true;
    this.token = token;
    localStorage.setItem('token', token);
    this.authEm.emit(true);
  }

  public setFalse() {
    this.isAuth = false;
    this.token = null;
    localStorage.removeItem('token');
    this.authEm.emit(false);
  }

  ngOnInit(): void {

  }
  }
