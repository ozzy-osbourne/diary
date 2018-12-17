import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UsersComponent} from './users/users.component';
import {AuthGuard} from './shared/services/auth-guard.service';
import {NewUserFormComponent} from './new-user-form/new-user-form.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'userInfo/:id', component: UserInfoComponent, canActivate: [AuthGuard]},
  {path: 'createUser', component: NewUserFormComponent, canActivate: [AuthGuard]},
  {path: 'changeUser/:group', component: GroupComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
