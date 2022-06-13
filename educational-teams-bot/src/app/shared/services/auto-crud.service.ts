import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoCrudService {

  constructor(private http: HttpClient) { }

  autoUpsert(object:any, type:string){
  
    return ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  }
  async fetchList(type:string){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }
      let list
       await this.http.get('http://localhost:5025/api/'+type+'s', httpOptions).subscribe(value => {
         console.log(value);
         
        list = value
      })
    await console.log(list);
      
      return list
    //return this.http.get("http://localhost:"+type+'s');
  }
}
