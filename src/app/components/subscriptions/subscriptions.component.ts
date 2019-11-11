import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first, last } from 'rxjs/operators';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscribed:boolean
  subscriptions = [
    {
      name: 'Gender Pay Reporting',
      subscribed : true
    },
    {
      name: 'Gender Pay Insights',
      subscribed : true
    },
    {
      name: 'Pay Intelligence',
      subscribed : false
    },
    {
      name: 'Equal Pay Reporting',
      subscribed : false
    },
    {
      name: 'Equal Pay Insights',
      subscribed : true
    },
    {
      name: 'Pay Benchmarking',
      subscribed : false
    },
    {
      name: 'Benefits and Reward Insight',
      subscribed : false
    },
    {
      name: 'Benefits and Reward Intelligence',
      subscribed : false
    },
    {
      name: 'Benefits and Reward Benchmarking',
      subscribed : false
    }
  
  ]
  powerBIData: any;
  constructor(private sharedService:SharedServiceService,private router:Router, private r:ActivatedRoute) { }

  selectedPowerBIData(selectedPowerBI){
    this.sharedService.setselectedPowerBIData(selectedPowerBI)
  }

  ngOnInit() {
    
    this.sharedService.getpowerBIData
      //.pipe(first())
      .subscribe(data=> {
        this.powerBIData = data
      });
  }

}
