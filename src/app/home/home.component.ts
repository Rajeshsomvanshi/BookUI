import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList : any=[]
  constructor(private service: BookServiceService, private router : Router) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    
    this.service.getAllAssignments().subscribe(data=>{
        this.bookList=data
    },
    // error=>{
    //   this.book=error
    //     console.log(error)
    // }
    )
  }

  onEditClick(val:any){
    this.router.navigate(['edit/'+ val])
    //alert(val)
  }

  onDeleteClick(val:any){
    alert("Are you sure want to delete this book");
    this.service.deleteBook(val).subscribe(data=>{
      alert("Book Deleted Successfully data");
      this.ngOnInit()
      //this.router.navigate(['home'])
    },error=>{
      alert("Book Deleted Successfully error");
      this.ngOnInit()
      //this.router.navigate(['home'])
    })
  }

}
