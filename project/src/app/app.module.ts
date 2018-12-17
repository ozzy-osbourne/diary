import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import {dbService} from './shared/services/db.service';
import {MaterialModule} from './material';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {AuthorizationService} from './shared/services/authorization.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDopInfoComponent } from './user-dop-info/user-dop-info.component';
import {LocalStorageService} from './shared/services/local-storage.service';
import {GroupComponent} from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    UserInfoComponent,
    NewUserFormComponent,
    GroupComponent,
    HomePageComponent,
    UserDopInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    dbService,
    AuthorizationService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
