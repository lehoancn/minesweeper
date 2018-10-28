import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../api/cell';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.css']
})
export class CellContentComponent implements OnInit {
  isMouseDown: boolean = false;
  mouseDownUrl: string = "./assets/0.png";

  @Input() cell: Cell;
  @Output() change = new EventEmitter();
  @Output() checkSuccess = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.cell.classCss = "normal-class";
  }

  onRightClick() {
    if(!this.cell.isOpen){
      if(this.cell.hasFlag){
        this.cell.url = "./assets/facingDown.png";
      }else{
        this.cell.url = "./assets/flagged.png";
      }
    }
    this.cell.hasFlag = !this.cell.hasFlag;
    this.checkSuccess.emit(this.cell);
    return false;
  }
  openCell(){
    this.change.emit(this.cell);
  }
  mouseDown(){
    this.isMouseDown = true;
  }
  mouseUp(){
    this.isMouseDown = false;
  }
}
