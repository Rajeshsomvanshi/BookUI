import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-management';
 
  

  constructor(){}
  ngOnInit(): void {
  }

  
}
