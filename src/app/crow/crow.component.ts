import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crow',
  templateUrl: './crow.component.html',
  styleUrls: ['./crow.component.css'],
  styles: [
    '.cases {display: flex; flex-flow: row rowrap;}',
    '.case {border:1px solid black; flex: 1 1 ;}'
  ]
})
export class CrowComponent {
  @Input() crowPosition: number;
  @Input() set nbCases(value: number) {
    this.cases = [];
    while (value--)
      this.cases.push(0);
  }

  couleurCase(i) {
let nbCases = this.cases.length;
let rouge = Math.floor(((nbCases - 1 -i) *255) /(nbCases - 1));
let vert = Math.floor((i*255)/(nbCases - 1));

return `rgb(${rouge}, ${vert}, 0)`;
  }

  get nbCases() {
    return this.cases.length - 1;
  }

  cases = [];
}
