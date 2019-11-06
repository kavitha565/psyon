import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  isUploaded:boolean
  fileToUpload:File = null
  progress:number = 0
  fileDetails:any = []
  fileName
  //@ViewChild('fileInput',{static: false}) fileInput:ElementRef
  myForm = this.fb.group({
    fileName : ['',Validators.required]
  })

  clickMe(){
    alert("Clicked me!!")
  }
  constructor(private fb:FormBuilder,private cs:CommonService) { }

  onFileInput(files: FileList){
    
    this.fileToUpload = files.item(0);
    let fileDetailsObj = {
      fileName : this.fileToUpload.name,
      fileSize : this.fileToUpload.size,
      progress : 0
    }
    this.fileDetails.unshift(fileDetailsObj)
  }

  submit(){

    this.isUploaded = true
    this.myForm.get('fileName').setValue('')
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
            this.fileDetails[0].progress = Math.round(event.loaded/event.total *100);
            console.log("Uploaded"+this.fileDetails[0].progress+"%");
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
