import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {ContactComponent} from '../contact/contact.component';
import {AddcontactComponent} from '../addcontact/addcontact.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuardService} from './auth.guard.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddcontactComponent, canActivate: [AuthGuardService]},
  {path: 'contacts', component: ContactsComponent, children: [{path: ':id/:name', component: ContactComponent}], canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
