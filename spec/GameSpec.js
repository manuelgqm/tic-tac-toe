describe("Game", function(){
	it("Should add a player", function(){
		var game = Game.create();
		var player = {};
		expect(game.addPlayer(player).numPlayers()).toEqual(1);
	});

	it("Should add two players", function(){
		var game = Game.create();
		var player1 = {};
		var player2 = {};
		game.addPlayer(player1);
		game.addPlayer(player2);
		expect(game.numPlayers()).toEqual(2);
	})

});