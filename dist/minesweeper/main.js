(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-board></app-main-board>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'minesweeper';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-board/main-board.component */ "./src/app/main-board/main-board.component.ts");
/* harmony import */ var _cell_content_cell_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell-content/cell-content.component */ "./src/app/cell-content/cell-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"],
                _cell_content_cell_content_component__WEBPACK_IMPORTED_MODULE_5__["CellContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell-content/cell-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cell-content/cell-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-content {\n    width: 20px;\n    height: 20px;\n}\n\n.normal-class {\n    opacity: 1;\n}\n\n.hint-class {\n    opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC1jb250ZW50L2NlbGwtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jZWxsLWNvbnRlbnQvY2VsbC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbC1jb250ZW50IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5ub3JtYWwtY2xhc3Mge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5oaW50LWNsYXNzIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cell-content/cell-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cell-content/cell-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"button-cell\" (mousedown)=\"mouseDown()\" (mouseup)=\"mouseUp()\" (click)=\"openCell();\" (contextmenu)=\"onRightClick($event)\"><span><img [ngClass]=\"cell.classCss\" class=\"cell-content\" src=\"{{ isMouseDown ? mouseDownUrl : cell.url }}\"></span></button>"

/***/ }),

/***/ "./src/app/cell-content/cell-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cell-content/cell-content.component.ts ***!
  \********************************************************/
/*! exports provided: CellContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellContentComponent", function() { return CellContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellContentComponent = /** @class */ (function () {
    function CellContentComponent() {
        this.isMouseDown = false;
        this.mouseDownUrl = "./assets/0.png";
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CellContentComponent.prototype.ngOnInit = function () {
        this.cell.classCss = "normal-class";
    };
    CellContentComponent.prototype.onRightClick = function () {
        if (!this.cell.isOpen) {
            if (this.cell.hasFlag) {
                this.cell.url = "./assets/facingDown.png";
            }
            else {
                this.cell.url = "./assets/flagged.png";
            }
        }
        this.cell.hasFlag = !this.cell.hasFlag;
        this.checkSuccess.emit(this.cell);
        return false;
    };
    CellContentComponent.prototype.openCell = function () {
        this.change.emit(this.cell);
    };
    CellContentComponent.prototype.mouseDown = function () {
        this.isMouseDown = true;
    };
    CellContentComponent.prototype.mouseUp = function () {
        this.isMouseDown = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellContentComponent.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CellContentComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CellContentComponent.prototype, "checkSuccess", void 0);
    CellContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell-content',
            template: __webpack_require__(/*! ./cell-content.component.html */ "./src/app/cell-content/cell-content.component.html"),
            styles: [__webpack_require__(/*! ./cell-content.component.css */ "./src/app/cell-content/cell-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CellContentComponent);
    return CellContentComponent;
}());



/***/ }),

/***/ "./src/app/main-board/main-board.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-board/main-board.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-content {\n    width: 20px;\n    height: 20px;\n}\n\ntable {\n    border-spacing: 0px;\n    border-collapse: collapse;\n    padding: 0px;\n    margin: 0px;\n    border: 0px;\n}\n\ntd {\n    padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ib2FyZC9tYWluLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1ib2FyZC9tYWluLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbC1jb250ZW50IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMHB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxudGQge1xuICAgIHBhZGRpbmc6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-board/main-board.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-board/main-board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr *ngFor=\"let row of cells\">\n    <td *ngFor=\"let cell of row\">\n      <app-cell-content [cell]=\"cell\" (change)=\"openCell($event)\" (checkSuccess)=\"checkSuccess($event)\"></app-cell-content>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/main-board/main-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-board/main-board.component.ts ***!
  \****************************************************/
/*! exports provided: MainBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBoardComponent", function() { return MainBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainBoardComponent = /** @class */ (function () {
    function MainBoardComponent() {
        this.MAX_ROWS = 19;
        this.MAX_COLUMNS = 10;
        this.NUMBER_OF_BOMBS = 40;
        this.rands = [];
        this.cells = [];
    }
    MainBoardComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.NUMBER_OF_BOMBS; i++) {
            var rand = Math.floor((Math.random() * this.MAX_ROWS * this.MAX_COLUMNS));
            this.rands.push(rand);
        }
        for (var i = 0; i < this.MAX_ROWS; i++) {
            var rows = [];
            for (var j = 0; j < this.MAX_COLUMNS; j++) {
                var cell = {};
                cell.row = i;
                cell.column = j;
                cell.value = 0;
                cell.url = "./assets/facingDown.png";
                if (this.rands.includes(i * this.MAX_COLUMNS + j)) {
                    cell.hasBomb = true;
                }
                rows.push(cell);
            }
            this.cells.push(rows);
        }
        for (var i = 0; i < this.MAX_ROWS; i++) {
            for (var j = 0; j < this.MAX_COLUMNS; j++) {
                var cell = this.cells[i][j];
                cell.value = this.countBombs(cell);
            }
        }
    };
    MainBoardComponent.prototype.countBombs = function (cell) {
        var count = 0;
        for (var i = cell.row - 1; i <= cell.row + 1; i++) {
            if (i < 0 || i >= this.MAX_ROWS) {
                continue;
            }
            for (var j = cell.column - 1; j <= cell.column + 1; j++) {
                if (j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)) {
                    continue;
                }
                if (this.cells[i][j].hasBomb) {
                    count++;
                }
            }
        }
        return count;
    };
    MainBoardComponent.prototype.gameOver = function () {
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var eachCell = row_1[_b];
                this.openSingleCell(eachCell);
            }
        }
    };
    MainBoardComponent.prototype.checkSuccess = function (cell) {
        var countOpenCells = 0;
        var countBombHasFlag = 0;
        var countFlags = 0;
        var countBombs = 0;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var eachCell = row_2[_b];
                if (eachCell.isOpen) {
                    countOpenCells++;
                }
                if (eachCell.hasBomb) {
                    countBombs++;
                }
                if (eachCell.hasFlag) {
                    if (eachCell.hasFlag) {
                        countFlags++;
                        if (eachCell.hasBomb) {
                            countBombHasFlag++;
                        }
                    }
                }
            }
        }
        if (countOpenCells + countFlags == this.MAX_ROWS * this.MAX_COLUMNS && countBombs == countBombHasFlag) {
            console.log("Success!");
        }
    };
    MainBoardComponent.prototype.openCell = function (cell) {
        if (cell.hasBomb) {
            this.gameOver();
            return;
        }
        this.openSingleCell(cell);
        if (cell.value == 0) {
            this.openEmptyCell(cell);
        }
        else {
            var countFlags = this.countFlags(cell);
            if (countFlags == cell.value) {
                this.openSiblings(cell);
            }
        }
        this.checkSuccess(cell);
    };
    MainBoardComponent.prototype.openSingleCell = function (cell) {
        cell.isOpen = true;
        if (cell.hasBomb) {
            cell.url = "./assets/bomb.png";
        }
        else {
            cell.url = "./assets/" + cell.value + ".png";
        }
    };
    MainBoardComponent.prototype.openEmptyCell = function (emptyCell) {
        var emptySiblings = [];
        emptySiblings.push(emptyCell);
        emptySiblings = this.getEmptySibling(emptySiblings);
        for (var _i = 0, emptySiblings_1 = emptySiblings; _i < emptySiblings_1.length; _i++) {
            var sibling = emptySiblings_1[_i];
            this.openSingleCell(sibling);
        }
        var unopenSiblings = this.getUnopenSiblings(emptySiblings);
        for (var _a = 0, unopenSiblings_1 = unopenSiblings; _a < unopenSiblings_1.length; _a++) {
            var sibling = unopenSiblings_1[_a];
            this.openSingleCell(sibling);
        }
    };
    MainBoardComponent.prototype.openSiblings = function (cell) {
        for (var i = cell.row - 1; i <= cell.row + 1; i++) {
            if (i < 0 || i >= this.MAX_ROWS) {
                continue;
            }
            for (var j = cell.column - 1; j <= cell.column + 1; j++) {
                if (j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)) {
                    continue;
                }
                var tmpCell = this.cells[i][j];
                if (!tmpCell.hasFlag) {
                    if (tmpCell.hasBomb) {
                        this.gameOver();
                        return;
                    }
                    this.openSingleCell(tmpCell);
                    if (tmpCell.value == 0) {
                        this.openEmptyCell(tmpCell);
                    }
                }
            }
        }
    };
    MainBoardComponent.prototype.getEmptySibling = function (goodCell) {
        for (var _i = 0, goodCell_1 = goodCell; _i < goodCell_1.length; _i++) {
            var cell = goodCell_1[_i];
            if (cell.row > 0) {
                var topCell = this.cells[cell.row - 1][cell.column];
                if (topCell.value == 0 && !goodCell.includes(topCell)) {
                    goodCell.push(topCell);
                    return this.getEmptySibling(goodCell);
                }
            }
            if (cell.row < this.MAX_ROWS - 1) {
                var bottomCell = this.cells[cell.row + 1][cell.column];
                if (bottomCell.value == 0 && !goodCell.includes(bottomCell)) {
                    goodCell.push(bottomCell);
                    return this.getEmptySibling(goodCell);
                }
            }
            if (cell.column > 0) {
                var leftCell = this.cells[cell.row][cell.column - 1];
                if (leftCell.value == 0 && !goodCell.includes(leftCell)) {
                    goodCell.push(leftCell);
                    return this.getEmptySibling(goodCell);
                }
            }
            if (cell.column < this.MAX_COLUMNS - 1) {
                var rightCell = this.cells[cell.row][cell.column + 1];
                if (rightCell.value == 0 && !goodCell.includes(rightCell)) {
                    goodCell.push(rightCell);
                    return this.getEmptySibling(goodCell);
                }
            }
        }
        return goodCell;
    };
    MainBoardComponent.prototype.getUnopenSiblings = function (goodCells) {
        var unopenCells = [];
        for (var _i = 0, goodCells_1 = goodCells; _i < goodCells_1.length; _i++) {
            var cell = goodCells_1[_i];
            for (var i = cell.row - 1; i <= cell.row + 1; i++) {
                if (i < 0 || i >= this.MAX_ROWS) {
                    continue;
                }
                for (var j = cell.column - 1; j <= cell.column + 1; j++) {
                    if (j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)) {
                        continue;
                    }
                    var tmpCell = this.cells[i][j];
                    if (tmpCell.isOpen != true) {
                        unopenCells.push(tmpCell);
                    }
                }
            }
        }
        return unopenCells;
    };
    MainBoardComponent.prototype.countFlags = function (cell) {
        var count = 0;
        for (var i = cell.row - 1; i <= cell.row + 1; i++) {
            if (i < 0 || i >= this.MAX_ROWS) {
                continue;
            }
            for (var j = cell.column - 1; j <= cell.column + 1; j++) {
                if (j < 0 || j >= this.MAX_COLUMNS || (i == cell.row && j == cell.column)) {
                    continue;
                }
                var tmpCell = this.cells[i][j];
                if (tmpCell.hasFlag) {
                    count++;
                }
            }
        }
        return count;
    };
    MainBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-board',
            template: __webpack_require__(/*! ./main-board.component.html */ "./src/app/main-board/main-board.component.html"),
            styles: [__webpack_require__(/*! ./main-board.component.css */ "./src/app/main-board/main-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBoardComponent);
    return MainBoardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Documents/Document/learn/angular/minesweeper/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map