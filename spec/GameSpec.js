describe("Game", function(){
	it("Should add a player", function(){
		var game = Game.create();
		var player = {};
		expect(game.addPlayer(player).numPlayers()).toEqual(1);
	});

});