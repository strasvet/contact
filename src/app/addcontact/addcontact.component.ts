import {Component, OnInit} from '@angular/core';
import {HttpProvider} from '../other/http.provider';
import {ContactAddModel} from '../other/contactAdd.model';
import {OkModel} from '../other/ok.model';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  contactId: number;
  address: string;
  description: string;
  email: string;
  fullName: string;
  phoneNumber: string;

  textSuccess: string;
  textError: string;

  constructor(private httpProvider: HttpProvider) {
  }

  ngOnInit() {
  }

  contactAdd() {
    /*console.log(this.address);*/
    /*console.log(as);*/
    let body = new ContactAddModel();
    /*body.address = 'STAM';
    body.description = 'descriptionSTAM';
    body.email = 'emailSTAM';
    body.fullName = 'FullnameStam';
    body.phoneNumber = 'phoneStam';*/
    body.address = this.address;
    body.description = this.description;
    body.email = this.email;
    body.fullName = this.fullName;
    body.phoneNumber = this.fullName;
    this.httpProvider.contactSet(body).subscribe(
      (value: OkModel) => {
        console.log(value.message);
        this.textSuccess = value.message;
        this.address = '';
        this.description = '';
        this.email = '';
        this.fullName = '';
        this.phoneNumber = '';
      },
      (err) => {
        console.log(err)
        this.textError = err.message;
      }
    );
  }

}
