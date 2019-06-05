console.info("state2")

demo.state2 = function () {
};
demo.state2.prototype = {
    preload: function () {
        game.load.tilemap('field', 'assets/tilesets/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset', 'assets/tilesets/tileset.png');
        game.load.image('sky', 'assets/tilesets/sky.png');

    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        addChangeStateEventsListeners();

        var map = game.add.tilemap('field');

        map.addTilesetImage('tileset');
        map.addTilesetImage('sky');

        map.createLayer('background');
        map.createLayer('grass');
        map.createLayer('ground');
        map.createLayer('impas');

    },
    update: function () {
    }

};