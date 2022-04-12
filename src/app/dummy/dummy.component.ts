import { LowerCasePipe } from '@angular/common';
import { Component, OnInit, AfterViewInit,AfterViewChecked, AfterContentInit,AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit, AfterViewInit,AfterViewChecked, AfterContentInit,AfterContentChecked {
  typeOfText = 'text';
  newTypeOfValue="text";
  textValueFromModel = "hi this is from model";
  sampleDateText = new Date();
  sampleArray = [5,10,15,20,600];
  myNameFromTS="vasanth from ts";
  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  view() {
    //alert("hi");
    console.log(this.textValueFromModel);
    if (this.typeOfText == 'text') {
      this.typeOfText = 'password';
    }
    else {
      this.typeOfText = 'text';
    }
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }
}
