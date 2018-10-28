import { Component, OnInit } from '@angular/core';
import { Cell } from '../api/cell';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  MAX_ROWS = 19;
  MAX_COLUMNS = 10;
  NUMBER_OF_BOMBS = 40;

  rands: number[] = [];

  cells = [];

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < this.NUMBER_OF_BOMBS; i++){
      var rand = Math.floor((Math.random() * this.MAX_ROWS * this.MAX_COLUMNS));
      this.rands.push(rand);
    }

    for(var i = 0; i < this.MAX_ROWS; i++){
      var rows: Cell[] = [];
      for(var j = 0; j < this.MAX_COLUMNS; j++){
        var cell: Cell = {};
        cell.row = i;
        cell.column = j;
        cell.value = 0;
        cell.url = "./assets/facingDown.png";
        if(this.rands.includes(i * this.MAX_COLUMNS + j)){
          cell.hasBomb = true;
        }
        rows.push(cell);
      }
      this.cells.push(rows);
    }
    for(var i = 0; i < this.MAX_ROWS; i++){
      for(var j = 0; j < this.MAX_COLUMNS; j++){
        var cell: Cell = this.cells[i][j];
        cell.value = this.countBombs(cell);
      }
    }
  }
  countBombs(cell: Cell){
    var count = 0;
    for(var i = cell.row - 1; i <= cell.row + 1; i++){
      if(i < 0 || i >= this.MAX_ROWS){
        continue;
      }
      for(var j = cell.column - 1; j <= cell.column + 1; j++){
        if(j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)){
          continue;
        }
        if(this.cells[i][j].hasBomb){
          count++;
        }
      }
    }

    return count;
  }

  gameOver(){
    for(let row of this.cells){
      for(let eachCell of row){
        this.openSingleCell(eachCell);
      }
    }
  }
  checkSuccess(cell){
    var countOpenCells = 0;
    var countBombHasFlag = 0;
    var countFlags = 0;
    var countBombs = 0
    for(let row of this.cells){
      for(let eachCell of row){
        if(eachCell.isOpen){
          countOpenCells++;
        }
        if(eachCell.hasBomb){
          countBombs++;
        }
        if(eachCell.hasFlag){
          if(eachCell.hasFlag){
            countFlags++;
            if(eachCell.hasBomb){
              countBombHasFlag++;
            }
          }
        }
      }
    }
    if(countOpenCells + countFlags == this.MAX_ROWS * this.MAX_COLUMNS && countBombs == countBombHasFlag){
      console.log("Success!");
    }
  }
  
  openCell(cell){
    if(cell.hasBomb){
      this.gameOver();
      return;
    }
    this.openSingleCell(cell);
    if(cell.value == 0){
      this.openEmptyCell(cell);
    }else{
      var countFlags = this.countFlags(cell);
      if(countFlags == cell.value){
        this.openSiblings(cell);
      }
    }
    this.checkSuccess(cell);
  }

  openSingleCell(cell: Cell){
    cell.isOpen = true;
    if(cell.hasBomb){
      cell.url = "./assets/bomb.png";
    }else{
      cell.url = "./assets/" + cell.value + ".png";
    }
  }

  openEmptyCell(emptyCell: Cell){
    var emptySiblings: Cell[] = [];
    emptySiblings.push(emptyCell);
    emptySiblings = this.getEmptySibling(emptySiblings);
    for(let sibling of emptySiblings){
      this.openSingleCell(sibling);
    }

    var unopenSiblings = this.getUnopenSiblings(emptySiblings);
    for(let sibling of unopenSiblings){
      this.openSingleCell(sibling);
    }
  }

  openSiblings(cell: Cell){
    for(var i = cell.row - 1; i <= cell.row + 1; i++){
      if(i < 0 || i >= this.MAX_ROWS){
        continue;
      }
      for(var j = cell.column - 1; j <= cell.column + 1; j++){
        if(j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)){
          continue;
        }
        var tmpCell: Cell = this.cells[i][j];
        if(!tmpCell.hasFlag){
          if(tmpCell.hasBomb){
            this.gameOver();
            return;
          }
          this.openSingleCell(tmpCell);
          if(tmpCell.value == 0){
            this.openEmptyCell(tmpCell);
          }
        }
      }
    }
  }

  getEmptySibling(goodCell: Cell[]){
    for(let cell of goodCell){
      if(cell.row > 0){
        var topCell: Cell = this.cells[cell.row - 1][cell.column];
        if(topCell.value == 0 && !goodCell.includes(topCell)){
          goodCell.push(topCell);
          return this.getEmptySibling(goodCell);
        }
      }
      if(cell.row < this.MAX_ROWS - 1){
        var bottomCell: Cell = this.cells[cell.row + 1][cell.column];
        if(bottomCell.value == 0 && !goodCell.includes(bottomCell)){
          goodCell.push(bottomCell);
          return this.getEmptySibling(goodCell);
        }
      }
      if(cell.column > 0){
        var leftCell: Cell = this.cells[cell.row][cell.column - 1];
        if(leftCell.value == 0 && !goodCell.includes(leftCell)){
          goodCell.push(leftCell);
          return this.getEmptySibling(goodCell);
        }
      }
      if(cell.column < this.MAX_COLUMNS - 1){
        var rightCell: Cell = this.cells[cell.row][cell.column + 1];
        if(rightCell.value == 0 && !goodCell.includes(rightCell)){
          goodCell.push(rightCell);
          return this.getEmptySibling(goodCell);
        }
      }
    }

    return goodCell;
  }

  getUnopenSiblings(goodCells: Cell[]){
    var unopenCells: Cell[] = [];
    for(let cell of goodCells){
      for(var i = cell.row - 1; i <= cell.row + 1; i++){
        if(i < 0 || i >= this.MAX_ROWS){
          continue;
        }
        for(var j = cell.column - 1; j <= cell.column + 1; j++){
          if(j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)){
            continue;
          }
          var tmpCell: Cell = this.cells[i][j];
          if(tmpCell.isOpen != true){
            unopenCells.push(tmpCell);
          }
        }
      }
    }
    return unopenCells;
  }

  countFlags(cell: Cell){
    var count = 0;

    for(var i = cell.row - 1; i <= cell.row + 1; i++){
      if(i < 0 || i >= this.MAX_ROWS){
        continue;
      }
      for(var j = cell.column - 1; j <= cell.column + 1; j++){
        if(j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)){
          continue;
        }
        var tmpCell: Cell = this.cells[i][j];
        if(tmpCell.hasFlag){
          count++;
        }
      }
    }
    
    return count;
  }
}
