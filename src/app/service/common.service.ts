import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  postFile(fileToUpload: File){
    const formData:FormData = new FormData();
    formData.append('fileKey',fileToUpload,fileToUpload.name);
    return this.http.post(environment.endpoint.fileUploadUrl,formData,{
      reportProgress:true,
      observe:'events'
    });
  }
}
