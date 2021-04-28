'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;

function setup() {
  cnv = createCanvas(w, h);

  textFont('Futura');

  player = new Player();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
    break;
  }

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  //
  // } else if (state === 'level 1' && points > 50) {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else {
  //
  // }
}



function title() {
  background(242, 205, 94);
  textSize(80);
  textFont('Futura');
  fill(255);
  textAlign(CENTER);
  text('Your GAME', w/2, h/5);

  textSize(30);
  text('click anywhere to start!', w/2, h/2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(107, 242, 217);
  //text('click for points', w/2, h - 30);

  player.display();
}

function level1MouseClicked() {
  points++;
  //points += 1;
  //points = points + 1;
  console.log('points = ' + points);
  if (points >= 10){
    state = 'you win';
  }
}

function youWin(){
  background(206, 75, 242);
  textSize(80);
  textFont('Futura');
  stroke(255);
  text('You WIN!', w/2, h/2);

  textSize(30);
  text('click anywhere to restart!', w/2, h *3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
