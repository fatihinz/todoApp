import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL = 'https://api.limantech.com/todo/todo';

  constructor(
    @Inject('apiURL') private apiUrl
   // private http:HttpClient
  ) { }

  // addTodo(obj){
  //   return this.http.post(url: this.apiURL, obj);
  // }

  // getAllTodos(){
  //   return this.http.get(url: this.apiURL );
  // }

  // updateTodo(obj){
  //   return this.http.put(url: this.apiURL, obj);
  // }

  // removeTodo(id){
  //   return this.http.delete(url: this.apiURL + id);
  // }

}
