var BootState = {
    init: function() {
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
    },
    preload: function() {
        this.load.image('logo', 'assets/img/loading.png');
        this.load.image('sky', 'assets/img/sky.png');
        this.load.image('bender', 'assets/img/bender.png');
        this.load.image('seba', 'assets/img/seba.png');
    },
    create: function() {
        this.game.stage.backgroundColor = '#000';
        this.state.start('preload');
    }
};

var PreloadState = {
    preload: function() {
        var sky = this.add.sprite(0, 0, 'sky');
        sky.scale.setTo(1,1.35)
        this.logo = this.add.sprite(this.game.world.centerX -200, this.game.world.centerY-200, 'logo');

        text = this.add.text(265, game.world.height - 100, 'Press space to start...', { fill: '#ffffff' });
        text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
    },
    update: function() {
        if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.state.start('game');
        }
    }
};

var EndState = {
    preload: function() {
        var bender = this.add.sprite(0, 0, 'bender');
        text = this.add.text(165, game.world.height - 300, 'Congratulations! You won!', { fill: '#ffffff', fontSize: '32px' });
        text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
    },
    update: function() {
        if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('boot',true,false);
        }
    }
}

var GameOverState = {
    preload: function() {
        var seba = this.add.sprite(0, 0, 'seba');
        text = this.add.text(165, game.world.height - 300, 'Game over. You lost :(', { fill: '#ffffff', fontSize: '32px' });
        text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
    },
    update: function() {
        if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('boot',true,false);
        }
    }
}

var game = new Phaser.Game(800, 640, Phaser.AUTO, 'game');

game.state.add('boot', BootState);
game.state.add('preload', PreloadState);
game.state.add('game', demo.state1);
game.state.add('end', EndState);
game.state.add('gameOver', GameOverState);

game.state.start('boot');