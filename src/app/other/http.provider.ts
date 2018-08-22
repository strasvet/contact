import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenModel} from './token.model';
import {ErrorModel} from './error.model';
import {ContactAddModel} from './contactAdd.model';
import {C} from '@angular/core/src/render3';
import {ContactUpdateModel} from './contactUpdate.model';
import {AuthService} from './auth.service';

@Injectable()
export class HttpProvider {
  BASE_URL: string = 'https://telranstudentsproject.appspot.com/_ah/api/contactsApi/v1';
  headers: HttpHeaders = new HttpHeaders({'Authorization': 'token'});
  /*textErr: { message: string };*/
  textErr: string;

  constructor(private httpClient: HttpClient, private auth: AuthService) {
  }

  /*  public registration(email: string, password: string) {
      let body = {email: email, password: password};
      this.httpClient.post(this.BASE_URL + '/registration', body, {headers: {'Authorization': 'token'}})
        .subscribe(value => console.log(value), err => console.log(err));
    }*/
  public registration(email: string, password: string) {
    let body = {email: email, password: password};
    return this.httpClient.post(this.BASE_URL + '/registration', body);
  }

  /*public login(email: string, password: string) {
    let body = {email: email, password: password};
    this.httpClient.post(this.BASE_URL + '/login', body,)
      .subscribe((value: TokenModel) => console.log(value.token), (err: ErrorModel) => {
        if (err.status === 401) {
          console.log(err.status, 'ERRORRRRS401');
        } else {
          console.log(err.error.error.message);
        }
      });
  }*/


  /*public login(email: string, password: string) {
    let body = {email: email, password: password};
    this.httpClient.post(this.BASE_URL + '/login', body,)
      .subscribe((value: TokenModel) => {console.log(value.token), this.textErr = value.token}, (err: ErrorModel) => {
        console.log(err.error.error.message);
        this.textErr = JSON.parse(err.error.error.message).message;
        /!*console.log(this.textErr.message);*!/
        console.log(JSON.parse(err.error.error.message).message);
      });
  }*/
  public login(email: string, password: string) {
    let body = {email: email, password: password};
    return this.httpClient.post(this.BASE_URL + '/login', body);
  }


  /*public contactSet(contact?: ContactAddModel | ContactUpdateModel, id?: number) {*/
  public contactSet(contact: ContactAddModel | ContactUpdateModel) {
/*    console.log('startTest');
      if (id !== undefined){
        console.log(id);
      } else {
        console.log(contact);
      }*/
    /*let body = contact;*/
    console.log('start to send!');
    console.log(contact);
  return this.httpClient.post(this.BASE_URL + '/setContact', contact, { headers: { 'Authorization': this.auth.getToken()}});
  }

  public getContacts() {
    return this.httpClient.get(this.BASE_URL + '/contactsarray', { headers: { 'Authorization': this.auth.getToken()}});
  }

  public removeAllContacts() {
    let body = {};
    return this.httpClient.post(this.BASE_URL + '/clearContactsList', body, { headers: { 'Authorization': this.auth.getToken()}});
  }

  public removeContact(contactId: string) {
    console.log('start delete');
    console.log(contactId);
    let body = {
      contactId: contactId
    };
    return this.httpClient.post(this.BASE_URL + '/contact', body, { headers: { 'Authorization': this.auth.getToken()}});
  }
}
