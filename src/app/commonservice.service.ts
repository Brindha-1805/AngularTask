import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  URL="https://reqres.in/api/products";
  
  constructor(private http:HttpClient) { }

MyData(){
  return this.http.get(this.URL)
  console.log('inside the data',Response)
}

}
 