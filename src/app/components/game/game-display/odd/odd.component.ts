import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  public odd: number[] = [];

  @Input() set displayOdd(input: number) {
    if(input%2 != 0) {
      this.odd.push(input);
    }  }


  constructor() {}


  colorGenerator(value: number) {}
  ngOnInit(): void {}
}
