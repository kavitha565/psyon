import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private cmsData  = new BehaviorSubject([]);
  getCmsData = this.cmsData.asObservable();

  private cmsUrl = new BehaviorSubject('');
  getCmsUrl = this.cmsUrl.asObservable();

  private powerBIData = new BehaviorSubject('');
  getpowerBIData = this.powerBIData.asObservable();

  private selectedPowerBIData = new BehaviorSubject('');
  getselectedPowerBIData = this.selectedPowerBIData.getValue();

  constructor() { }

  setCmsData(data:any){
    this.cmsData.next(data);
  }

  setCmsUrl(data:any){
    this.cmsUrl.next(data);
  }

  setpowerBIData(data:any){
    this.powerBIData.next(data);
  }

  setselectedPowerBIData(data:any){
    this.selectedPowerBIData.next(data);
  }
  

}
