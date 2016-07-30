"use strict"
var Game = {
	create: function(){
		return Object.create( this ).init();
	},

	init: function(){
		this.players = new Array;
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
		return false;
	}
}