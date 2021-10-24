import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm:NgForm;
  bookList : any=[]


  constructor(private sercive: BookServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onEditClick(val:any){
    this.router.navigate(['edit/'+ val])
    //alert(val)
  }

  onDeleteClick(val:any){
    alert("Are you sure want to delete this book");
    this.sercive.deleteBook(val).subscribe(data=>{
      alert("Book Deleted Successfully");
      this.router.navigate(['home'])
    },error=>{
      alert("Book Deleted Successfully");
      this.router.navigate(['home'])
    })
  }

  onSubmit(){
    if(this.searchForm.value['isbn']==''){
      this.searchForm.value['isbn']=0
    }

    
    this.sercive.searchBook(this.searchForm.value).subscribe(data=>{
      this.bookList=data;
      this.searchForm.reset();
    },error=>{
      
    })

  }

}
