import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  public even: number[] = [];
  

  constructor() {}


  colorGenerator(value: number) {
    // rip no time for cool features
    return 'red';
  }
  ngOnInit(): void {}
}
