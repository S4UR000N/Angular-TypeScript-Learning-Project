import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() set displayEven(input: number) {
    console.log(input);
  }
  constructor() {}
  ngOnInit(): void {}
}
