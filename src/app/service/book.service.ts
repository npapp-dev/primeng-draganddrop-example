import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  draggedBook: Book = new Book();

  getAllBooks() {
    return this.http.get<any>('assets/all-books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => {
        return data;
      });
  }

  getFavoriteBooks() {
    return this.http.get<any>('assets/favorite-books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => {
        return data;
      });
  }

}


export class Book {
    name: string  = "";
    price: number  = 0;
    author: string  = "";
    serialNo: number  = 0;
}
