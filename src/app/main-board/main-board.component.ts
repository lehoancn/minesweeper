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
  NUMBER_OF_BOMBS = 50;

  rands: number[] = [];

  cells = [];

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < this.NUMBER_OF_BOMBS; i++){
      var rand = Math.floor((Math.random() * this.MAX_ROWS * this.MAX_COLUMNS));
      this.rands.push(rand);
    }
    console.log(this.rands);

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
  
  openCell(cell){
    if(cell.value == 0){
      this.openEmptyCell(cell);
    }else{
      var countFlags = this.countFlags(cell);
      if(countFlags == cell.value){
        this.openSiblings(cell);
      }else{
        var unopenSiblings = this.getUnopenSiblings([cell]);
        console.log("Show hint", unopenSiblings);
        
        for(let sibling of unopenSiblings){
          sibling.classCss = "hint-class";
        }
        for(let row of this.cells){
          for(let eachCell of row){
            if(!unopenSiblings.includes(eachCell)){
              eachCell.classCss = "normal-class";
            }
          }
        }
      }
    }
  }

  openEmptyCell(emptyCell: Cell){
    var emptySiblings: Cell[] = [];
    emptySiblings.push(emptyCell);
    emptySiblings = this.getEmptySibling(emptySiblings);
    for(let sibling of emptySiblings){
      sibling.url = "./assets/0.png";
      sibling.isOpen = true;
    }

    var unopenSiblings = this.getUnopenSiblings(emptySiblings);

    for(let sibling of unopenSiblings){
      sibling.url = "./assets/" + sibling.value + ".png";
      sibling.isOpen = true;
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
          tmpCell.url = "./assets/" + tmpCell.value + ".png";
          tmpCell.isOpen = true;
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