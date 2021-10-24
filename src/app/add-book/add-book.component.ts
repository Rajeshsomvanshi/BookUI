import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('f') newStaffForm:NgForm



  book :any

  
  constructor(private service: BookServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const book ={
      ISBN : this.newStaffForm.value['isbn'],
      Title : this.newStaffForm.value['title'],
      PublicationDate : this.newStaffForm.value['pdate'],
      Authors : this.newStaffForm.value['authors'].split(',')
    }
    
    this.service.addBook(book).subscribe(data=>{
      alert("Book Added Successfully");
      this.router.navigate(['home'])
    }, 
    error=>{
      alert("Book Added Successfully");
      this.router.navigate(['home'])
  })

}}
