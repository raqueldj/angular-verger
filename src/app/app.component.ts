import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dieResult: number = 1;
  onChoose() { return true };
  trees = [4, 4, 4, 4];
}
