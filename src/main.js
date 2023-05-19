let config ={
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0.8
            },
            debug: true,
            debugBodyColor: 0xffffff
        }
    },
    scene: [Scene1]
};

let game = new Phaser.Game(config);