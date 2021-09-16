import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  @Input() public duration = 0;


  constructor() { }


  ngOnInit(): void {}
}
