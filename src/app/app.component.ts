import { Component } from '@angular/core';

interface gameState {
  crowPosition: number,
  trees: number[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nbCases = 6;
  state: gameState = {
    crowPosition: this.nbCases - 1,
    trees: [4, 4, 4, 4]
  }

  chooseTree = false;
  winner = null;

  message = '';

  get canRollDie(){
    return !this.chooseTree;
  }

  get dieNbFaces(){
    return this.state.trees.length +2;
  }

  onDieRolled(dieValue: number) {
    // le de a ete lance
    if (dieValue === 0) {
      //crow avance
      this.state.crowPosition--;
      this.message = 'Crow advances'
      //crow gagne?
      if (this.state.crowPosition == 0) {
        this.winner = "Crow";
      }
    } else if (dieValue == 1) {
      // utilisateur choisi arbre
      this.message = 'Choose a tree'
      this.chooseTree = true;
    } else {
      //retirer fruit
      let treeIndex = dieValue - 2;
      if (this.state.trees[treeIndex] > 0) {
        this.state.trees[treeIndex]--;
        this.testPlayerWins();
        this.message = 'Fruit took'
      } else {
        this.message = 'There is not fruits';
      }
    }
  }

  testPlayerWins() {
    if (this.state.trees.every(tree => tree == 0)) {
      this.winner = "You!"
    }
  }

  onChooseTree(treeIndex) {
    //arbre a ete choisi
    this.state.trees[treeIndex]--;
    this.testPlayerWins();
    this.chooseTree = false;
  }

  dieResult: number = 1;
  onChoose() { return true };

  restart() {
    this.winner = null;
    this.state = {
      crowPosition: this.nbCases - 1,
      trees: [4, 4, 4, 4]
    }
this.chooseTree = false;
this.message = 'Restart';
  }
}
