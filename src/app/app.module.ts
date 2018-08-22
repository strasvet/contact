import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AddcontactComponent} from './addcontact/addcontact.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './other/app-routing.modules';
import {HttpClientModule} from '@angular/common/http';
import {HttpProvider} from './other/http.provider';
import {AuthService} from './other/auth.service';
import {AuthGuardService} from './other/auth.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AddcontactComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HttpProvider, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
