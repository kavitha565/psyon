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
  getResults(endpointUrl) {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    return this.http.get<string>(endpointUrl,requestOptions);
  }
  getPowerBIData(){
    return this.http.get(environment.endpoint.powerBIUrl);
  }

  getCmsData(){
    return this.http.get(environment.endpoint.cmsUrl);
  }

  registerService(data){
    return this.http.post(environment.endpoint.registerUrl,data)
  }

  getUsersService(){
    return this.http.get(environment.endpoint.usersUrl);
  }

  updateUserService(data){
    return this.http.post(environment.endpoint.registerUrl,data)
  }
}
