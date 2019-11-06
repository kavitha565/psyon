import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'psyon';
  isLogin:boolean 
  signin
  constructor(private oktaAuth: OktaAuthService,private router:Router){
    this.signin = this.oktaAuth;
  }
  changeOfRoutes(){
    this.signin.oktaAuth.session.get().then(res => {
      if(res.status === 'INACTIVE') {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    })
  }
  ngOnInit(){
    this.changeOfRoutes();
  }
  
}
