import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {

    this.ROOT_URL = 'http://localhost:3000/api';
  }


  get(uri: string) {
    console.log("get request works");
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: object) {
    console.log("post request works");
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(uri: string, payload: object) {
    console.log("patch request works");
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    console.log("delete request works");
    //console.log(uri);
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

}
