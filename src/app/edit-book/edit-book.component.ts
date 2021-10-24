import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @ViewChild('f') editForm:NgForm
  id;
  book;

  constructor(private route : ActivatedRoute, private service : BookServiceService, private datePipe : DatePipe, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getBookById(this.id).subscribe(data=>{
        this.book=data
        //this.book.publicationDate=this.datePipe.transform(new Date(), "dd-mm-yyyy")
        //this.newStaffForm.value['publicationDate']=this.datePipe.transform(new Date(), "dd-mm-yyyy")
        console.log(this.book.publicationDate)
      },error=>{
        //console.log("error")
      })
    });
  }

  onSubmit(title:any, pdate:any){
    const updatedbook = {
      isbn : +this.id,
      title: title.value,
      publicationDate : new Date(pdate.value),
      authors : this.book.authors
    }
    //console.log(updatedbook)

    this.service.updateBook(updatedbook).subscribe(data=>{
      alert("Book Update Succcessfully");
      this.router.navigate(['home'])

    },error=>{
      alert("fail")
    })
    

  }

}
