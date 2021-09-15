import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public isRunning: boolean = false
  public duration: number = 0;

  private ref: any;
  private tickEmitter: EventEmitter<number> = new EventEmitter<number>();


  constructor() {}


  start(): void {
    this.isRunning = true;
    this.ref = setInterval(() => {
      this.duration++;
      this.tickEmitter.emit(this.duration);
    }, 1000);
  }
  stop(): void {
    clearInterval(this.ref);
    this.isRunning = false;
  }
  clear(): void {
    this.stop();
    this.duration = 0;
  }
  ngOnInit(): void {}
}
