import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component extends Level2Component {
  // TODO: Complete this class by adding the appropriate code.
  // Try to avoid copying the code from level 2. Find a different solution
  // for reusing the existing logic.

  constructor() {
    super();
    this.restart();
  }

  public override restart(): void {
    super.restart();
    this.gameBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
  }

  /**
   * Checks if there has been a winner in the connect four 7x6 Board
   * @returns the winner in the connect four game with a 7x6 Board
   */
  protected override getWinnerIndex(): number {
    //check for horizontal win
    for (let i = 0; i < this.gameBoard.length; i++) {
      for (let j = 0; j < this.gameBoard[i].length - 3; j++) {
        if (
          this.gameBoard[i][j] !== 0 &&
          this.gameBoard[i][j] === this.gameBoard[i][j + 1] &&
          this.gameBoard[i][j] === this.gameBoard[i][j + 2] &&
          this.gameBoard[i][j] === this.gameBoard[i][j + 3]
        ) {
          return this.gameBoard[i][j];
        }
      }
    }

    //check for vertical win
    for (let i = 0; i < this.gameBoard.length - 3; i++) {
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        if (
          this.gameBoard[i][j] !== 0 &&
          this.gameBoard[i][j] === this.gameBoard[i + 1][j] &&
          this.gameBoard[i][j] === this.gameBoard[i + 2][j] &&
          this.gameBoard[i][j] === this.gameBoard[i + 3][j]
        ) {
          return this.gameBoard[i][j];
        }
      }
    }


    //check for left to right diagonal win on a 7x6 board
    for (let i = 0; i < this.gameBoard.length - 3; i++) {
      console.log(this.gameBoard)
      for (let j = 0; j < this.gameBoard[i].length - 3; j++) {
        if (
          this.gameBoard[i][j] !== 0 &&
          this.gameBoard[i][j] === this.gameBoard[i + 1][j + 1] &&
          this.gameBoard[i][j] === this.gameBoard[i + 2][j + 2] &&
          this.gameBoard[i][j] === this.gameBoard[i + 3][j + 3]
        ) {
          return this.gameBoard[i][j];
        }
      }
    }

    //check for right to left diagonal win on a 7x6 board
    for (let i = 0; i < this.gameBoard.length - 3; i++) {
      for (let j = 3; j < this.gameBoard[i].length; j++) {
        if (
          this.gameBoard[i][j] !== 0 &&
          this.gameBoard[i][j] === this.gameBoard[i + 1][j - 1] &&
          this.gameBoard[i][j] === this.gameBoard[i + 2][j - 2] &&
          this.gameBoard[i][j] === this.gameBoard[i + 3][j - 3]
        ) {
          return this.gameBoard[i][j];
        }
      }
    }

    return 0;
  }
}
