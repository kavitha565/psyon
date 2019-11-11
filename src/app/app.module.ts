import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OktaCallbackComponent, OktaAuthService, OktaAuthModule } from '@okta/okta-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';
import { SharedServiceService } from './service/shared-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubscribeFilterPipe } from './pipes/subscribe-filter.pipe';
import { UmbracoComponent } from './components/umbraco/umbraco.component';
import { MvcPartialDirective } from './directives/mvc-partial.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PowerBIComponent } from './components/power-bi/power-bi.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// const config = {
//   "baseUrl": "https://hyperiongrp-dev.oktapreview.com",
//   "issuer": "https://hyperiongrp-dev.oktapreview.com/oauth2/ausiu499ixSvvf26w0h7",
//   "redirectUri": "http://localhost:4200/implicit/callback",
//   "clientId": "0oaiu05jva0vcmXwa0h7",
//   "scope": "openid profile email"
// };
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SubscriptionsComponent,
    SubscribeFilterPipe,
    UmbracoComponent,
    MvcPartialDirective,
    NavbarComponent,
    PowerBIComponent,
    FileUploadComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
