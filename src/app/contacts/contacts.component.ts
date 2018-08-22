import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpProvider} from '../other/http.provider';
import {ContactUpdateModel} from '../other/contactUpdate.model';
import {map} from 'rxjs/operators';
import {ListAllModel} from '../other/listAll.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: ContactUpdateModel[];

  /*@Output() toSend: EventEmitter<ContactUpdateModel> = new EventEmitter<ContactUpdateModel>();*/

  /*contacts = [];*/
  fromBackcontact: ContactUpdateModel;


  onClick(contact: ContactUpdateModel) {
    /*console.log('clickeeeeed');*/
    /*console.log(contact.contactId);*/
    /*this.toSend.emit(contact);*/
    this.fromBackcontact = contact;
    /*console.log(this.toSend);*/
  }

  constructor(private httpProvider: HttpProvider, private route: Router) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    /*this.contacts = <any>this.httpProvider.getContacts().subscribe(value => console.log(value));*/
    this.httpProvider.getContacts().subscribe(
      (value: ListAllModel) => {
        /*console.log(value.contacts)},*/
        console.log(value.contacts);
        this.contacts = value.contacts;
        /*for default read on child*/
        if(value.contacts !== undefined) {
        this.fromBackcontact = value.contacts[0];
        }
      },
      (err) => {
        console.log(err);
      });
  }

}
