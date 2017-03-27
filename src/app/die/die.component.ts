import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent {
  @Input() nbFaces;
  @Output() diceRolled : EventEmitter<number> = new EventEmitter();

  dieRolled() {
    let result = Math.floor(this.nbFaces * Math.random());
    this.diceRolled.emit(result);
  }

}
