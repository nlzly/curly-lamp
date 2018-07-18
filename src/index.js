import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var score = 0;
var scoreText;

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
    this.load.image('background', 'assets/blank_background.png');
}

function create ()
{
    this.add.image(400, 400, 'background');
    var logo = this.add.image(400, 400, 'logo').setInteractive();
    logo.on('pointerup', incrementButtonClick);
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

}

function update () {
    scoreText.setText('Score: ' + score);
}

function incrementButtonClick() {
    score = score+1;
    console.log("button pressed");
}
