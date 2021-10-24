import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  readonly APIUrl="https://localhost:44339/api";

  constructor(private http: HttpClient) { }

  addBook(val:any){
    return this.http.post(this.APIUrl + '/Books/add-book', val)
  }

  getAllAssignments():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/Books/get-all-book');
  }

  searchBook(val:any){
    return this.http.post(this.APIUrl + '/Books/search-book', val)
  }

  getBookById(id:number){
    return this.http.get(this.APIUrl + '/Books/get-bookbyId/'+ id)
  }

  updateBook(val:any){
    return this.http.put(this.APIUrl + '/Books/update-book', val)
  }

  deleteBook(id:number){
    return this.http.delete(this.APIUrl+ '/Books/delete-book/'+ id)
  }
}
