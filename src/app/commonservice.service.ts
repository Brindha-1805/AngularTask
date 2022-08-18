import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Base_URL } from './Utils/constants';


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  
  
  constructor(private http:HttpClient) { }

MyData(){
  return this.http.get(Base_URL)
  
}

}
 