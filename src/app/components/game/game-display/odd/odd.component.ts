import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  public odd: number[] = [];


  constructor() {}


  colorGenerator(value: number) {
    // rip no time for cool features
    return 'red';
  }
  ngOnInit(): void {}
}
