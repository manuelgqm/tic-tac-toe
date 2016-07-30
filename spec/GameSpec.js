describe("Game", function(){
	var game;
	beforeEach(function(){
		game = Game.create();
	});

	it("Should add a player", function(){
		var player = {};
		expect(game.addPlayer(player).numPlayers()).toEqual(1);
	});

	it("Should add two players", function(){
		var player1 = {};
		var player2 = {};
		game.addPlayer(player1);
		game.addPlayer(player2);
		expect(game.numPlayers()).toEqual(2);
	});

	describe("That is not set up", function(){

		it("Should return false if there are no players", function(){
			expect(game.isSetted()).toBeTruthy();
		});
	})


});