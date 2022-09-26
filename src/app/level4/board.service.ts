import { Injectable } from '@angular/core';

/**
 * Logic for a connect-four-board.
 */
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  // TODO: Add the required code here

  private board! : number[][];
  private currentPlayerIx! : number;
  private currentWinnerIx! : number;

  constructor() {
    this.restart();
  }

  public get winner(): number {
    return this.currentWinnerIx;
  }

  public get currentPlayer(): number {
    return this.currentPlayerIx;
  }

  public get gameBoard(): number[][] {
    return this.board;
  }

  private getWinnerIndex(): number {
    //check for horizontal win
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length - 3; j++) {
        if (
          this.board[i][j] !== 0 &&
          this.board[i][j] === this.board[i][j + 1] &&
          this.board[i][j] === this.board[i][j + 2] &&
          this.board[i][j] === this.board[i][j + 3]
        ) {
          return this.board[i][j];
        }
      }
    }

    //check for vertical win
    for (let i = 0; i < this.board.length - 3; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (
          this.board[i][j] !== 0 &&
          this.board[i][j] === this.board[i + 1][j] &&
          this.board[i][j] === this.board[i + 2][j] &&
          this.board[i][j] === this.board[i + 3][j]
        ) {
          return this.board[i][j];
        }
      }
    }


    //check for left to right diagonal win on a 7x6 board
    for (let i = 0; i < this.board.length - 3; i++) {
      console.log(this.board)
      for (let j = 0; j < this.board[i].length - 3; j++) {
        if (
          this.board[i][j] !== 0 &&
          this.board[i][j] === this.board[i + 1][j + 1] &&
          this.board[i][j] === this.board[i + 2][j + 2] &&
          this.board[i][j] === this.board[i + 3][j + 3]
        ) {
          return this.board[i][j];
        }
      }
    }

    //check for right to left diagonal win on a 7x6 board
    for (let i = 0; i < this.board.length - 3; i++) {
      for (let j = 3; j < this.board[i].length; j++) {
        if (
          this.board[i][j] !== 0 &&
          this.board[i][j] === this.board[i + 1][j - 1] &&
          this.board[i][j] === this.board[i + 2][j - 2] &&
          this.board[i][j] === this.board[i + 3][j - 3]
        ) {
          return this.board[i][j];
        }
      }
    }

    return 0;
  }

    public drop(colIx: number) {
      if (!!this.currentWinnerIx) {
        return;
      }

      for (let i = this.board.length - 1; i >= 0; i--) {
        if (!this.board[i][colIx]) {
          this.board[i][colIx] = this.currentPlayerIx;
          this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
          this.currentWinnerIx = this.getWinnerIndex()
          return;
        }
      }
    }

  public restart(): void {
    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;
    this.board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  }
}
