import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent {
  @Input() trees: number[];
  @Input() chooseTree: boolean;
  @Output() chosen: EventEmitter<number> = new EventEmitter();

  onChose(treeFruits) {
    this.chosen.emit(treeFruits);
  }


}

