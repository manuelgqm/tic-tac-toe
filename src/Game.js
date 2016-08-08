"use strict"
var Game = {
	create: function(){
		return Object.create( this ).init();
	},

	init: function(){
		this.players = new Array;
		this.turns = new Array;
		this.numPlayersRequired = 2;
		return this;
	},

	addPlayer: function(player) {
		this.players.push(player);
		return this;
	},

	numPlayers: function(){
		return this.players.length;
	},

	isSetted: function(){
		return this.players.length == this.numPlayersRequired;
	},

	addTurn: function(turn){
		this.turns.push(turn);
		return this;
	},

	numTurns: function(){
		return this.turns.length;
	}

}