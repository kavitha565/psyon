import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private profileData  = new BehaviorSubject({name:'kavi'});
  currentProfileData = this.profileData.asObservable();

  constructor() { }

  setProfileData(data:any){
    this.profileData.next(data);
  }

}
