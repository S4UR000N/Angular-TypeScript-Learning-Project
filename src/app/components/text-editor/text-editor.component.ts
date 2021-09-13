import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  hadInteractionInput: boolean = false;
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

  constructor() {}

  ngOnInit(): void {}
}
