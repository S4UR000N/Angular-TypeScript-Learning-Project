import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  public even: number[] = [];

  @Input() set displayEven(input: number) {
    if(input%2 == 0 && input != 0) {
      this.even.push(input);
    }
  }

  
  constructor() {}


  colorGenerator(value: number) {}
  ngOnInit(): void {}
}
