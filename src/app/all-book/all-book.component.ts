import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../service/book.service';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {

    availableBooks: Book[] = [];

    draggedBook: Book = new Book();

    @Output() changed = new EventEmitter<Book>();

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.bookService.getAllBooks().then(books => this.availableBooks = books);
    }

    dragStart(event: Event, book: Book) {
        console.log('dragStart');
        this.draggedBook = book;
        this.changed.emit(book);
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

        dragEnd(event: Event) {
            this.draggedBook = new Book();
        }

}
