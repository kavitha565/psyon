import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.scss']
})
export class PowerBIComponent implements OnInit {
  selectedPowerBi: string;
  powerBiData: any;
  selectedObject:any

  constructor(private sharedService:SharedServiceService) { }
  getSelectedPowerBiObject(selectedPowerBi){
    for(let i=0;i<this.powerBiData.length;i++){
      for(let j=0;j<this.powerBiData[i].lstReport.length;j++){
        if(this.powerBiData[i].lstReport[j].Name === selectedPowerBi)
        this.selectedObject = this.powerBiData[i].lstReport[j]
        console.log(this.selectedObject);
      }
    }
  }

  ngOnInit() {

    this.sharedService.getpowerBIData
      .subscribe((data)=>{
        this.powerBiData = data
        this.sharedService.getselectedPowerBIData
          .subscribe((value)=>{
            if(value == ''){
              let path = location.pathname.split("/")
              value = path[path.length-1].split("%20").join(" ")
            }
            this.getSelectedPowerBiObject(value)
        })
      })

    
    
  }

  ngOnChanges(){
    
  }

}
