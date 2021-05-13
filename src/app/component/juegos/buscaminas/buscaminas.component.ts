import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-buscaminas',
    templateUrl: './buscaminas.component.html',
    styleUrls: ['./buscaminas.component.scss']
  })
  export class BuscaminasComponent implements OnInit {
 
  
    public tiles:string[];
    public moves:number = 0;
  
    public shuffleMoves:number = 0;
    public lv1Moves:number = 0;
    public lv2Moves:number = 0;
    public lv3Moves:number = 0;
  
    public selectedLevel:string = "";
  
    
    constructor() {
      this.tiles = [];
     }
  
    ngOnInit(): void {
      this.getTiles();
      this.disableButtons();
      this.disableSaveScoreButton();
    }
  
    getTiles(){
      for (let index = 0; index < 9; index++) {
        this.tiles[index] = (<HTMLElement> document.getElementById("tile"+(index+1))).innerText
      }
    }
  
    
    play(tileNumber:number){
  
      this.changeTile(tileNumber);
  
      if(this.checkTiles()){
        this.disableButtons();
        this.enableSaveScoreButton();
        alert("You have turned all tiles to O in "+this.moves+" movements. congratulations!")
      }
  
    }
  
    disableButtons(){
      for (let index = 0; index < 9; index++) {
        (<HTMLInputElement> document.getElementById("button"+(index+1))).disabled = true;
      }
    }
  
    enableButtons(){
      for (let index = 0; index < 9; index++) {
        (<HTMLInputElement> document.getElementById("button"+(index+1))).disabled = false;
      }
    }
  
    enableSaveScoreButton(){
  
      (<HTMLInputElement> document.getElementById("saveScoreButton")).disabled = false;
  
    }
  
    disableSaveScoreButton(){
  
      (<HTMLInputElement> document.getElementById("saveScoreButton")).disabled = true;
  
    }
  
    checkTiles():boolean{
      var allOk=true;
      var tileValue = "";
  
      for (let index = 0; index < 9; index++) {
        tileValue = (<HTMLElement> document.getElementById("tile"+(index+1))).innerText
        if(tileValue === "X"){
          allOk = false;
        }
      }
  
      return allOk;
    }
  
    shuffle(){
      this.resetMoves("shuffle");
      this.selectedLevel = "shuffle"
      for (let index = 0; index < 9; index++) {
        if(this.getRandomInt() === 0){
          (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
        }else{
          (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "X";
        }
      }
  
      this.enableButtons();
    }
  
    resetMoves(gameMode:string){
      this.moves = 0;
  
      switch (gameMode) {
        case "shuffle":
          this.shuffleMoves = 0;
          break;
  
        case "lv1":
          this.lv1Moves = 0;
          break;
  
        case "lv2":
          this.lv2Moves = 0;
        break;
  
          case "lv3":
            this.lv3Moves = 0;
          break;
      }
      
  
    }
  
    getRandomInt() {
      return Math.floor(Math.random() * (2 - 0) + 0);
    }
  
    switchTileValue(tileNumber:number){
      var tileValue = (<HTMLElement> document.getElementById("tile"+(tileNumber))).innerHTML;
      var newTileValue = "O";
  
      if(tileValue === "O"){
        newTileValue = "X";
      }
  
      (<HTMLElement> document.getElementById("tile"+(tileNumber))).innerHTML = newTileValue;
    }
    
  
    changeTile(tileNumber:number){
  
      this.moves++;
  
      switch (this.selectedLevel) {
        case "shuffle":
          this.shuffleMoves++;
          break;
  
        case "lv1":
          this.lv1Moves++
          break;
  
        case "lv2":
          this.lv2Moves++
        break;
  
          case "lv3":
            this.lv3Moves++
          break;
      }
  
      switch (tileNumber) {
        case 1:
          this.switchTileValue(tileNumber);
          this.switchTileValue(2);
          this.switchTileValue(4);
          break;
        case 2:
          this.switchTileValue(tileNumber);
          this.switchTileValue(1);
          this.switchTileValue(3);
          this.switchTileValue(5);
            break;
        case 3:
          this.switchTileValue(tileNumber);
          this.switchTileValue(2);
          this.switchTileValue(6);        
          break;
        case 4:
          this.switchTileValue(tileNumber);
          this.switchTileValue(1);
          this.switchTileValue(5);
          this.switchTileValue(7);
          break;
        case 5:
          this.switchTileValue(tileNumber);
          this.switchTileValue(2);
          this.switchTileValue(4);
          this.switchTileValue(6);
          this.switchTileValue(8);
          break;
        case 6:
          this.switchTileValue(tileNumber);
          this.switchTileValue(3);
          this.switchTileValue(5);
          this.switchTileValue(9);
          break;
        case 7:
          this.switchTileValue(tileNumber);
          this.switchTileValue(4);
          this.switchTileValue(8);
          break;
        case 8:
          this.switchTileValue(tileNumber);
          this.switchTileValue(5);
          this.switchTileValue(7);
          this.switchTileValue(9);
          break;
        case 9:
          this.switchTileValue(tileNumber);
          this.switchTileValue(8);
          this.switchTileValue(6);
          break;
      }
    }
  
    level(lvNumber:number){
      this.enableButtons();
      switch (lvNumber) {
        case 1:
          this.resetMoves("lv1");
          this.selectedLevel = "lv1"
          for (let index = 0; index < 9; index++) {
              (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
            }
            (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
          break;
        case 2:
          this.selectedLevel = "lv2"
          this.resetMoves("lv2");
          for (let index = 0; index < 9; index++) {
            (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
          }
          (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
          (<HTMLElement> document.getElementById("tile"+(9))).innerHTML = "X";
          break;
        case 3:
          this.selectedLevel = "lv3"
          this.resetMoves("lv3");
          for (let index = 0; index < 9; index++) {
            (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
          }
          (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
          (<HTMLElement> document.getElementById("tile"+(3))).innerHTML = "X";
          (<HTMLElement> document.getElementById("tile"+(5))).innerHTML = "X";
          (<HTMLElement> document.getElementById("tile"+(7))).innerHTML = "X";
          (<HTMLElement> document.getElementById("tile"+(9))).innerHTML = "X";
          break;
      
        default:
          break;
      }
    }
  
    saveHighScore(){
  
      /* this.highScore.shuffleMoves = this.shuffleMoves;
      this.highScore.lv1Moves = this.lv1Moves;
      this.highScore.lv2Moves = this.lv2Moves;
      this.highScore.lv3Moves = this.lv3Moves;
      this.highScore.date = (new Date()).toString();
  
      this.highScoreService.saveTilesScore(this.highScore); */
  
      this.disableSaveScoreButton();
      
    }
  }
  