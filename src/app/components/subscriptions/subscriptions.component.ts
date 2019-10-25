import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
