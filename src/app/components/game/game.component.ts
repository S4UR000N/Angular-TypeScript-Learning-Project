import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public duration: number = 0;

  constructor() {}

  // Setters
  set absorbDuration(duration: number) {
    this.duration = duration;
  }
  // Actions
  tickAbsorber(tickEmitterEvent: number): void {
    this.duration = tickEmitterEvent;
  }
  ngOnInit(): void {}
}
