import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  usersCollectionCollection:any;
  posts : any[] = [];
  
  constructor(private myHttpClient : HttpClient) { }
  ngOnInit(): void {

    var localVariable : number;
   
    localVariable =1;

    this.myHttpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data : any) => {
        this.posts = data;
        
        this.usersCollectionCollection = data;
        console.log(data);
        console.log(localVariable);
      }
    );
    
  }
}
