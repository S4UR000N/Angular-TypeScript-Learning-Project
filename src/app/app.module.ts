import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { GameControlComponent } from './components/game/game-control/game-control.component';
import { GameDisplayComponent } from './components/game/game-display/game-display.component';
import { OddComponent } from './components/game/game-display/odd/odd.component';
import { EvenComponent } from './components/game/game-display/even/even.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    GameControlComponent,
    GameDisplayComponent,
    OddComponent,
    EvenComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
