console.info("state1")
var demo = {};
var centerX = 800 / 2;
var centerY = 600 / 2;
var speed = 5;
var boar;
var horse;
var krawczyk;
var turkey;
demo.state1 = function () {
};
demo.state1.prototype = {
    preload: function () {
        game.load.spritesheet('boar', 'assets/sprites/boar.png', 67.333333, 48)
        game.load.spritesheet('horse', 'assets/sprites/horse.png', 78.75, 54)
        game.load.spritesheet('turkey', 'assets/sprites/turkey.png', 32, 32)
        // game.load.spritesheet('boar','assets/sprites/zebra.png', 65.5,48)
        // game.load.spritesheet('boar','assets/sprites/junior-boar.png', 67.4,48)

        game.load.tilemap('field', 'assets/tilesets/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset', 'assets/tilesets/tileset.png');
        game.load.image('sky', 'assets/tilesets/sky.png');
        game.load.image('background', 'assets/img/background.png');
        game.load.image('acorn', 'assets/sprites/acorn.png');
        game.load.audio('bgmusic', ['assets/sounds/boar-game.mp3']);

        game.load.spritesheet('krawczyk', 'assets/img/princess.png');

    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        addChangeStateEventsListeners();

        game.world.setBounds(0, 0, 3000, 800);
        // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var state1Background = game.add.sprite(0, 0, 'background');
        state1Background.scale.setTo(1, 1.2);

        var map = game.add.tilemap('field');

        map.addTilesetImage('tileset');

        map.createLayer('background')
        layer = map.createLayer('impas')

        // music = game.add.audio('bgmusic');
        // music.loopFull();
        // music.play();

        boar = game.add.sprite(10, game.world.height - 300, 'boar');
        boar.anchor.setTo(0.5, 0.5);
        boar.scale.setTo(1, 1);

        horse = game.add.sprite(400, game.world.height - 250, 'horse');
        horse.anchor.setTo(0.5, 0.5);
        horse.scale.setTo(1, 1);

        horse2 = game.add.sprite(1350, game.world.height - 500, 'horse');
        horse2.scale.setTo(1, 1);

        horse3 = game.add.sprite(1750, game.world.height - 600, 'horse');
        horse3.scale.setTo(1, 1);

        turkey = game.add.sprite(800, game.world.height - 250, 'turkey');
        turkey.anchor.setTo(0.5, 0.5);
        turkey.scale.setTo(-1, 1);

        turkey2 = game.add.sprite(2180, game.world.height - 250, 'turkey');
        turkey2.anchor.setTo(0.5, 0.5);
        turkey2.scale.setTo(-1, 1);


        krawczyk = game.add.sprite(80, 80, 'krawczyk');
        // krawczyk.
        krawczyk.anchor.setTo(0.5, 0.5);
        krawczyk.scale.setTo(1, 1);

        game.physics.enable([boar, horse, horse2, horse3, krawczyk, turkey, turkey2], Phaser.Physics.ARCADE);

        boar.body.checkCollision.left = true;
        boar.body.checkCollision.right = true;
        boar.body.checkCollision.down = true;
        boar.body.checkCollision.top = true;

        horse.body.checkCollision.left = true;
        horse.body.checkCollision.right = true;
        horse.body.checkCollision.down = true;
        horse.body.checkCollision.top = true;

        // turkey.body.checkCollision.left = true;
        // turkey.body.checkCollision.right = true;
        // turkey.body.checkCollision.down = true;
        // turkey.body.checkCollision.top = true;

        krawczyk.body.checkCollision.left = true;
        krawczyk.body.checkCollision.right = true;
        krawczyk.body.checkCollision.down = true;
        krawczyk.body.checkCollision.top = true;

        // boar.animations.add('walk', [0,1,2,3,4,5]);
        // boar.animations.add('walk', [0,1,2,3]);
        // boar.animations.add('walk', [0,1,2]);
        // boar.animations.add('walk', [0,1,2,3]);
        boar.animations.add('walk', [0, 1, 2, 3]);

        boar.body.collideWorldBounds = true;
        horse.body.collideWorldBounds = true;
        horse2.body.collideWorldBounds = true;
        horse3.body.collideWorldBounds = true;
        turkey.body.collideWorldBounds = true;
        turkey2.body.collideWorldBounds = true;
        krawczyk.body.collideWorldBounds = true;

        horse.body.bounce.y = 1;
        horse.body.gravity.y = 300;

        horse2.body.bounce.y = 1;
        horse2.body.gravity.y = 300;
        horse3.body.bounce.y = 1;
        horse3.body.gravity.y = 300;

        turkey.body.gravity.y = 300;
        turkey2.body.gravity.y = 300;


        map.setCollisionBetween(0, 2000, true, layer.index, true);

        krawczyk.body.gravity.y = 200;

        boar.body.gravity.y = 1400;
        boar.body.bounce.set(0);


        game.physics.enable(layer, Phaser.Physics.ARCADE);

        // score = this.add.text(game.width-130, 20, '0', { fill: '#fff' });
        // score.fixedToCamera = true;

        // acorn = this.add.sprite(game.width-154, 27, 'acorn');
        // acorn.fixedToCamera = true;

        game.camera.follow(boar);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 50, 0, 50, 50);

        horse.body.velocity.x = -15;
        horse2.body.velocity.x = -15;
        turkey.body.velocity.x = -30;
        turkey2.body.velocity.x = -30;

    },
    update: function () {

        if (horse.x > 650) {
            horse.body.velocity.x = -15;
            horse.scale.setTo(-1, 1);
        } else if (horse.x < 400) {
            horse.body.velocity.x = 30;
            horse.scale.setTo(1, 1);
        }
        if (horse2.x > 1400) {
            horse2.body.velocity.x = -15;
            horse2.scale.setTo(-1, 1);
        } else if (horse2.x < 1300) {
            horse2.body.velocity.x = 30;
            horse2.scale.setTo(1, 1);
        }
        if (turkey.x > 850) {
            turkey.body.velocity.x = -30;
            turkey.scale.setTo(-1, 1);

        } else if (turkey.x < 700) {
            turkey.body.velocity.x = 30;
            turkey.scale.setTo(1, 1);

        }

        if (turkey2.x > 2315) {
            turkey2.body.velocity.x = -30;
            turkey2.scale.setTo(-1, 1);

        } else if (turkey2.x < 2180) {
            turkey2.body.velocity.x = 30;
            turkey2.scale.setTo(1, 1);

        }

        this.game.physics.arcade.overlap(boar, horse, function () {
            this.state.start('gameOver');
        }, null, this);

        this.game.physics.arcade.overlap(boar, horse2, function () {
            this.state.start('gameOver');
        }, null, this);

        this.game.physics.arcade.overlap(boar, horse3, function () {
            this.state.start('gameOver');
        }, null, this);

        this.game.physics.arcade.overlap(boar, turkey, function () {
            this.state.start('gameOver');
        }, null, this);

        this.game.physics.arcade.overlap(boar, turkey2, function () {
            this.state.start('gameOver');
        }, null, this);

        this.game.physics.arcade.overlap(boar, krawczyk, function () {
            this.state.start('end');
        }, null, this);

        this.game.physics.arcade.collide(boar, layer);
        this.game.physics.arcade.collide(horse, layer);
        this.game.physics.arcade.collide(horse2, layer);
        this.game.physics.arcade.collide(horse3, layer);
        this.game.physics.arcade.collide(krawczyk, layer);
        this.game.physics.arcade.collide(turkey, layer);
        this.game.physics.arcade.collide(turkey2, layer);


        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            boar.scale.setTo(1, 1);

            boar.body.velocity.x = 300;
            boar.animations.play('walk', 14, true);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            boar.scale.setTo(-1, 1);
            boar.body.velocity.x = -300;
            boar.animations.play('walk', 14, true);
        } else {
            boar.animations.stop('walk');
            boar.frame = 3;
            boar.body.velocity.x = 0;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            if (boar.body.velocity.y === 0) {
                boar.body.velocity.y = -500;
            }
        }
    }

};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventsListeners() {
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);

}
