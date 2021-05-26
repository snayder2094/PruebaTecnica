import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import  { CanActivate } from "@angular/router";
import { AuthGuard } from "./services/guards/auth.guard";
import { AuthAdminGuard } from "./services/guards/auth-admin.guard";
import { LoginGuardGuard } from "./services/guards/login-guard.guard";



export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'home-admin', component: HomeAdminComponent, canActivate:[AuthAdminGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'login'}
]
