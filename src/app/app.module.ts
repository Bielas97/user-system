import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {TableElementComponent} from './users/table-element/table-element.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './auth/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';
import { ToolbarComponent } from './UI/toolbar/toolbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsersTableComponent } from './users/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableElementComponent,
    UserDetailsComponent,
    EditUserComponent,
    LoginComponent,
    ToolbarComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
