import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-umbraco',
  templateUrl: './umbraco.component.html',
  styleUrls: ['./umbraco.component.scss']
})
export class UmbracoComponent implements OnInit {
  htmlData:string
  constructor(private cs:CommonService,private sharedService:SharedServiceService) { }

  ngOnInit() {
    this.sharedService.getCmsUrl
      .subscribe(cmsUrl => {
        console.log("cms url"+cmsUrl);
        if(cmsUrl == ''){
          let path = location.pathname.split("/")
          cmsUrl = path[path.length-1]
        }
        this.cs.getResults(cmsUrl)
        .subscribe((res)=>{
          console.log(res);
          this.htmlData = res;
        },(err)=>{
          console.log(err);
        })
      });
      
    //get cms url details
      // let path = location.pathname.split("/")
      // let cmsUrl = path[path.length-1]
      // this.cs.getResults(cmsUrl)
      // .subscribe((res)=>{
      //   console.log(res);
      //   this.htmlData = res;
      // },(err)=>{
      //   console.log(err);
      // })

  }

}
