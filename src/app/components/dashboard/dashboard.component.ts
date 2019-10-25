import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fileToUpload:File = null
  progress:number = 0
  myForm = this.fb.group({
    fileName : ['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder,private cs:CommonService) { }
  onFileInput(files: FileList){
    this.fileToUpload = files.item(0);
  }
  submit(){
    console.log(this.fileToUpload);
    this.cs.postFile(this.fileToUpload)
      .subscribe((event:HttpEvent<any>)=>{
        switch(event.type){
          case HttpEventType.Sent:
            console.log("Request has been made!!");
            break;
          case HttpEventType.ResponseHeader:
            console.log("Response headers have been received!!");
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded/event.total *100);
            console.log("Uploaded"+this.progress+"%");
            break;
          case HttpEventType.Response:
              console.log("Uploaded successfully!!");
              break;
        }
      },err=>{
        console.log(err);
      })
  }
  ngOnInit() {
  }

}
