import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';
import { UmbracoComponent } from './components/umbraco/umbraco.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { PowerBIComponent } from './components/power-bi/power-bi.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    children : [
      {
        path : 'usersubscriptions',
        component : SubscriptionsComponent
      },
      {
        path : 'powerBI',
        children : [
          {
            path : '**',
            component : PowerBIComponent
          }
        ]
        
      },
      {
        path: 'umbraco',
        children : [
          {
            path : '**',
            component : UmbracoComponent
          }
        ]
      },
      {
        path: 'usermanagement',
        component : UserManagementComponent
      }
    ]
  },
  {
    path : 'fileUpload',
    component : FileUploadComponent
  },
  {
    path: '**', 
    pathMatch : 'full',
    redirectTo : 'login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
