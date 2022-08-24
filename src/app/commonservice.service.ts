import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Base_URL } from './Utils/constants';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
 constructor(private http: HttpClient) { }

  MyData() {
    return this.http.get(Base_URL)
 }
 
 updateData(data:any){
  console.log(data)
  const body={
    method:'PUT',
    body:JSON.stringify({
      Id:data.Id,
      Title:data.Title,
      body:data.Title,
      userId:data.Id     
    }),
    
    Headers:{
      'content-type':'application/json; charset-UTF-8',
    },
  }
     
  return this.http.put(`${Base_URL}/${data.Id}`,body)
 }
 deleteData(data:any){
  return this.http.delete(`${Base_URL}/${data}`)
 }
  
  
}

