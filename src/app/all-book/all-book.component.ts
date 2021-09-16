import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../service/book.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {

    availableBooks: Book[] = [];
    items: TreeNode[] = [];

    draggedBook: Book = new Book();
    draggedItem: TreeNode = {};

    @Output() changed = new EventEmitter<Book>();

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.bookService.getAllBooks().then(books => this.availableBooks = books);
        this.items.push({
          label: 'Harry Potter',
          data: 154
        },{
          label: 'Song of Ice and Fire',
          data: 155
        })
    }

     dragStart(event: Event, book: Book) {
        this.draggedBook = book;
        this.changed.emit(book);
    }

    dragEnd(event: Event) {
        this.availableBooks.slice(this.findIndex(this.draggedBook), -1);
        this.draggedBook = new Book();
    }

    findIndex(book: Book) {
      let index = -1;
      for (let i = 0; i < this.availableBooks.length; i++) {
          if (book.name === this.availableBooks[i].name) {
              index = i;
              break;
          }
      }
      return index;
    }

    dragStartNode(event: Event){
      let draggedBook = new Book();
      this.availableBooks.forEach(book=>{
        if(book.serialNo==this.draggedItem.data){
          draggedBook = book;
        }
      });
      this.bookService.draggedBook = draggedBook;
    }

}
