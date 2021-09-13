import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  colors = {
    DEFAULT: "default",
    RED: "red",
    BLUE: "blue"
  }
  decorations = {
    NONE: "none",
    TEXT_DECORATION_UNDERLINE: "text-decoration-underline",
    TEXT_DECORATION_LINE_THROUGH: "text-decoration-line-through"
  }

  color: string = 'default';
  decoration: string = "default";

  output: string = "Example Input";

  hadInteractionInput: boolean = false;

  luckyCrypto: string[] = [];

  constructor() {
    // random string generator
    let pass = (n: number) => [...crypto.getRandomValues(new Uint8Array(n))]
    .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join('');

    // random number generator
    let getRandomNumberBetween = (min: number, max: number) => {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    // random length applied to random string using random number
    let myLen = getRandomNumberBetween(1, 10);
    for(let i = 0; i < myLen; i++) {
      let r = pass(getRandomNumberBetween(1, 1000));
      // @ts-ignore: this.prop is really assigned before being used
      this.luckyCrypto.push(r);
    }
  }

  ngOnInit(): void {}
}
