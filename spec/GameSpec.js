describe("A Game", function(){
	var game;
	beforeEach(function(){
		game = Game.create();
	});

	it("should add a player", function(){
		var player = {};
		expect(game.addPlayer(player).numPlayers()).toEqual(1);
	});

	it("should add two players", function(){
		var player1 = {};
		var player2 = {};
		game.addPlayer(player1);
		game.addPlayer(player2);
		expect(game.numPlayers()).toEqual(2);
	});

	describe("that is not set up", function(){

		it("should return false if there are no players", function(){
			expect(game.isSetted()).toBeFalsy();
		});

		it("should return false if there is one player", function(){
			var player = {};
			game.addPlayer(player);
			expect(game.isSetted()).toBeFalsy();
		});

		it("should return false if starts", function(){
			expect(game.start()).toBeFalsy();
		});
	});

	describe("that is set up", function(){
		it("should have two players", function(){
			var player1 = {};
			var player2 = {};
			game.addPlayer(player1);
			game.addPlayer(player2);
			expect(game.isSetted()).toBeTruthy();
		});

		it("should start", function(){
			game.start();
			expect(game.currentTurnNumber()).toEqual(1);
		})
	});

	it("should add a turn", function(){
		var turn = {};
		game.addTurn(turn);
		expect(game.numTurns()).toEqual(1);
	});

	it("should add two turns", function(){
		var turn1 = {};
		var turn2 = {};
		game.addTurn(turn1);
		game.addTurn(turn2);
		expect(game.numTurns()).toEqual(2);
	});



});