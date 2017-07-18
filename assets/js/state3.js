console.info("state3")

demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#AAAAAA';

		        addChangeStateEventsListeners();

	},
	update: function(){}

};