import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-umbraco',
  templateUrl: './umbraco.component.html',
  styleUrls: ['./umbraco.component.scss']
})
export class UmbracoComponent implements OnInit {
  htmlData:string
  private _routerSub = Subscription.EMPTY;
  constructor(private cs:CommonService,private sharedService:SharedServiceService,private router:Router) {
    this._routerSub = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        console.log('Router event:', e);
        let path = location.pathname.split("/")
        let cmsUrl = path[path.length-1]
        this.cs.getResults(cmsUrl)
        .subscribe((res)=>{
          console.log(res);
          this.htmlData = res;
        },(err)=>{
          console.log(err);
        })
      }
      
    });
  }

  ngOnInit() {
      // this.sharedService.getCmsUrl
      // //.pipe(first())
      // .subscribe(cmsUrl => {
      //   console.log("cms url"+cmsUrl);
      //   if(cmsUrl == ''){
      //     let path = location.pathname.split("/")
      //     cmsUrl = path[path.length-1]
      //   }
      //   this.cs.getResults(cmsUrl)
      //   .subscribe((res)=>{
      //     console.log(res);
      //     this.htmlData = res;
      //   },(err)=>{
      //     console.log(err);
      //   })
      // });
  }
  ngOnDestroy(){
    this._routerSub.unsubscribe();
  }
}
