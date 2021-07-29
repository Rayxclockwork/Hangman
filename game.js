const start = require("./start.js");
const end = require("./end.js");

var inquirer = require("inquirer");
var isLetter = require("is-letter");

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
