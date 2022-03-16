import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  typeOfText = 'text';
  sampleArray = [5,10,15,20,600];
  myNameFromTS="vasanth from ts";
  constructor() { }

  ngOnInit(): void {
  }
  view() {
    alert("hi");
    if (this.typeOfText == 'text') {
      this.typeOfText = 'password';
    }
    else {
      this.typeOfText = 'text';
    }
  }
}
