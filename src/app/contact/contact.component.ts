import {Component, Input, OnInit, Output} from '@angular/core';
import {ContactUpdateModel} from '../other/contactUpdate.model';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ContactsComponent} from '../contacts/contacts.component';
import {HttpProvider} from '../other/http.provider';
import {OkModel} from '../other/ok.model';
import {ErrorModel} from '../other/error.model';
import {delay, timeInterval, timeout} from 'rxjs/operators';
import {promise} from 'selenium-webdriver';
import delayed = promise.delayed;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: ContactUpdateModel;

  show: boolean = false;


  textErr: string = null;
  textSucc: string = null;
  err: boolean = false;
  suc: boolean = false;

  constructor(private route: Router, private httpProvider: HttpProvider) {
  }

  ngOnInit() {
    /*this.route.params.subscribe(params => this.contact = params['contact']);*/
    /*this.route.params.subscribe(params => this.contactId = params['id']);
    this.route.params.subscribe(params => this.contactName = params['name']);
    this.route.queryParams.subscribe(params => this.phone = params['phone']);*/
    /*console.log(this.contact);*/
/**/
    /*this.contact.subscribe(v => console.log(v));*/

    /*this.toSend.subscribe(v => {
      this.contact = v;
      console.log(v);
    }, err => console.log(err));*/

  }

  messages(message: string) {
    this.err = false;
    this.suc = true;
    this.textSucc = message;
    setTimeout(( ) => {
        this.suc = false;
        this.textSucc = '';
        console.log('timeoutOUT');
      }, 2000);

  }
  messagesError(message: string){
    this.err = true;
    this.suc = false;
    this.textErr = message;
    setTimeout(( ) => {
      this.err = false;
      this.textErr = '';
      console.log('timeoutOUT');
    }, 2000);
  }

  save() {
    this.httpProvider.contactSet(this.contact).subscribe(
      (v: OkModel) => {
        console.log(v);
        this.messages(v.message);
      },
      (err: ErrorModel) => {
        console.log(err);
      }
    );
    this.show = false;
  }

  edit() {
    this.show = true;
  }

  removeContact(contactId: string) {
    this.httpProvider.removeContact(contactId).subscribe(
      (v: OkModel) => {
        console.log(v.message);
        this.route.navigated = false;
        this.route.navigate(['/contacts']);
        this.messages(v.message);
        /*this.route.navigateByUrl('/contacts', {skipLocationChange: true}).then(() => this.route.navigate(['/contacts']));*/
        /*this.ngOnInit();*/
      },
      (err: ErrorModel) => {
        console.log(err.error.error.message);
        this.messagesError(JSON.parse(err.error.error.message).message);
      }
    );
  }

  removeAll() {
    this.httpProvider.removeAllContacts().subscribe(
      (v: OkModel) => {
        console.log(v.message);
        this.route.navigated = false;
        this.route.navigate(['/contacts']);
        this.messages(v.message);
      },
      (err: ErrorModel) => {
        console.log(err.error.error.message);
        this.messagesError(JSON.parse(err.error.error.message).message);
      }
    );
  }
}
