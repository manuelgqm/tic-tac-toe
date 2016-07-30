describe("Game", function(){
	it("Should have at last two players", function(){
		var game = Game.create();
		expect( game.numPlayers()).toEqual(2);
	})
});