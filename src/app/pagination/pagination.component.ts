import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  usersCollectionCollection: any;
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  totalpages: number = 0;
  recordsPerPage: number = 10;
  currentPageNumber: number = 1;
  constructor(private myHttpClient: HttpClient) { }
  ngOnInit(): void {

    var localVariable: number;

    localVariable = 1;

    this.myHttpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.posts = data;

        this.usersCollectionCollection = data;
        console.log(data);
        console.log(localVariable);
        this.displayPage(1);
        this.totalpages = Math.ceil(data.length / this.recordsPerPage);
        console.log(this.totalpages);
        console.log(this.recordsPerPage);
      }
    );

  }

  displayPage(page: number) {
    this.currentPageNumber = page;
    let start = (page - 1) * this.recordsPerPage;
    let end = start + this.recordsPerPage;
    this.filteredPosts = this.posts.slice(start, end);
    console.log(this.filteredPosts);
  }
}
