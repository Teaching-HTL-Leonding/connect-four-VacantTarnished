import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  private currentWinnerIndex = 0;
  private playerStyles: string[];
  private playerNames: string[];
  private gameBoard!: number[][];

  constructor() {
    this.playerNames = ['', 'Red', 'Blue']
    this.playerStyles = ['', 'occupied-1', 'occupied-2'];
    this.restart();
  }

  public get winner() {
    return this.playerNames[this.currentWinnerIndex]
  }

  public drop(colIx: number) {
    if (!!this.currentWinnerIndex) {
      return;
    }

    console.log(`Coin dropped in column ${colIx}`);
    console.log(this.gameBoard.length)

    for (let i = this.gameBoard.length - 1; i >= 0; i--) {
      if (!this.gameBoard[i][colIx]) {
        this.gameBoard[i][colIx] = this.currentPlayerIndex;
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
        this.currentWinnerIndex = this.getWinnerIndex()
        return;
      }
    }
  }

  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
  public getWinnerIndex(): number {
    for (let i = 0; i < this.gameBoard.length; i++) {
      if (this.gameBoard[i][0] === this.gameBoard[i][1] && this.gameBoard[i][1] === this.gameBoard[i][2] && this.gameBoard[i][2] === this.gameBoard[i][3]) {
        return this.gameBoard[i][0];
      }

      if (this.gameBoard[0][i] === this.gameBoard[1][i] && this.gameBoard[1][i] === this.gameBoard[2][i] && this.gameBoard[2][i] === this.gameBoard[3][i]) {
        return this.gameBoard[0][i];
      }
    }

    if (this.gameBoard[0][0] === this.gameBoard[1][1] && this.gameBoard[1][1] === this.gameBoard[2][2] && this.gameBoard[2][2] === this.gameBoard[3][3]) {
      return this.gameBoard[0][0]
    }

    if (this.gameBoard[0][3] === this.gameBoard[1][2] && this.gameBoard[1][2] === this.gameBoard[2][1] && this.gameBoard[2][1] === this.gameBoard[3][0]) {
      return this.gameBoard[0][3]
    }

    return 0
  }

  public getStyle(row: number, column: number): string {
    return this.playerStyles[this.gameBoard[row][column]];
  }

  public restart(): void {
    this.gameBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.currentPlayerIndex = 1;
    this.currentWinnerIndex = 0;
  }
}
