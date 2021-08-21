
import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../service/book.service';

@Component({
    selector: 'app-drg',
    templateUrl: './drg.component.html',
    styleUrls: ['./drg.component.css']
})
export class DrgComponent implements OnInit {

 draggedBook: Book = new Book();

  changeHappened(event: Book){
    this.draggedBook = event;
  }

    constructor(){
    }

  ngOnInit(){
  }
}
