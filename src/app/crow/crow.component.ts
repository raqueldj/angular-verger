import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crow',
  templateUrl: './crow.component.html',
  styleUrls: ['./crow.component.css']
})
export class CrowComponent  {
@Input() crowPosition;

}
