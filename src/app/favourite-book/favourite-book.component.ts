import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../service/book.service';

@Component({
  selector: 'app-favourite-book',
  templateUrl: './favourite-book.component.html',
  styleUrls: ['./favourite-book.component.css']
})
export class FavouriteBookComponent implements OnInit {
    favoriteBooks: Book[] = [];

    availableBooks: Book[] = [];

    @Input()
    draggedBook: Book = new Book();

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.bookService.getFavoriteBooks().then(books => this.favoriteBooks = books);
        this.bookService.getAllBooks().then(books => this.availableBooks = books);
    }

    drop(event: Event) {
        if (this.draggedBook) {
            let draggedBookIndex = this.findIndex(this.draggedBook);
            this.favoriteBooks = [...this.favoriteBooks, this.draggedBook];
            this.draggedBook = new Book();
        }
    }

    dragEnd(event: Event) {
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
}
