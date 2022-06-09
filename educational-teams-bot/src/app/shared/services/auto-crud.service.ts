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
  fetchList(type:string){

    if(type == "tag")
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }
      /*let test = this.http.get('http://localhost:5025/api/Tags', httpOptions)
      test.subscribe(value => {
        console.log(value); 

      })*/
    }
    
    return ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    //return this.http.get("http://localhost:"+type+'s');
  }
}
