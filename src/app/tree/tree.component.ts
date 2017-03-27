import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input() nbFruits: number;

  @Input() chooseTree: boolean;
  @Output() chosen: EventEmitter<null> = new EventEmitter();

  onChoose() {
    this.chosen.emit();
  }

}
