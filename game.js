function game () {
	this.words = ["computer", "bed", "shelf", "desk"];
	this.chosenword = "";
	this.guessed = [];
	this.possible = 
	this.lives = 6;

	this.chosenword = this.getword();
}

game.prototype.getword = function(){
	let random = Math.floor(Math.random() * this.words.length);
	return this.words[random];
}

const game = require("./start.js");
const end = require("./end.js");