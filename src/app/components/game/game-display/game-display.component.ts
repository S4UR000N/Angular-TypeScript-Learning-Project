import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  @Input() set duration(duration: number) {
    duration == 0
    ? false
    :
        duration%2 != 0
        ? this.oddComponent.odd.push(duration)
        // ? this.oddComponent.odd[this.oddComponent.odd.length] = duration 
        : this.evenComponent.even[this.evenComponent.even.length] = duration //this.evenComponent.even.push(this.duration)
  }

  @ViewChild(OddComponent, {static: true}) oddComponent: any;
  @ViewChild(EvenComponent, {static: true}) evenComponent: any;



  constructor() {}

  
  ngOnInit(): void {}
}
