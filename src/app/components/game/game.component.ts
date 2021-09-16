import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public duration: number = 0;


  constructor() { }


  tickAbsorber(tickEmitterEvent: number) {
    this.duration = tickEmitterEvent;
  }
  ngOnInit(): void {}
}
