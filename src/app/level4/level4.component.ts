import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css'],
})
export class Level4Component {
  // TODO: Enhance solution from level 3 by extracting the logic in a separate Angular service.
  private playerStyles: string[];
  private playerNames: string[];

  constructor(private board: BoardService) {
    this.playerNames = ['', 'Red', 'Blue']
    this.playerStyles = ['', 'occupied-1', 'occupied-2'];
  }

  public drop(colIx: number) {
    this.board.drop(colIx);
  }

  public restart() {
    this.board.restart();
  }

  public get winner(): string {
    return this.playerNames[this.board.winner];
  }

  public get gameBoard(): number[][] {
    return this.board.gameBoard;
  }

  public get currentPlayer(): number {
    return this.board.currentPlayer;
  }

  public getStyle(rowIx: number, colIx: number): string {
    return this.playerStyles[this.gameBoard[rowIx][colIx]];
  }
}
