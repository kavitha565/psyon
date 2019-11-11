import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { first, last } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarData:any
  cmsUrl:string
  powerBIData:any
  constructor(private cs:CommonService,private sharedService:SharedServiceService,private router:Router) { }

  setCmsUrl(url:string){
    this.cmsUrl = url
    this.sharedService.setCmsUrl(this.cmsUrl);
  }
  
  selectedPowerBIData(selectedPowerBI){
    this.sharedService.setselectedPowerBIData(selectedPowerBI)
  }

  ngOnInit() {
    
      this.sharedService.getCmsData
      //.pipe(first())
      .subscribe(data=> {
        this.navBarData = data
      });

      this.sharedService.getpowerBIData
      //.pipe(first())
      .subscribe(data=> {
        this.powerBIData = data
      });
  }

}
