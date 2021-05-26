import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { InterceptorApiService } from './services/interceptor-api.service';
import { CommonModule } from '@angular/common';
import { ROUTES } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbInputModule, NbToastrModule, NbCardModule, NbSpinnerModule, NbActionsModule } from '@nebular/theme';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'CSRF-Token',
    }),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    AppRoutingModule,
    NgbModule,
    NbToastrModule.forRoot(),
    NbCardModule,
    NbSpinnerModule,
    NbActionsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
