let config ={
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '0x101010',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0.8
            },
            debug: true,
            debugShowBody: true,
            debugBodyColor: 0x000000,
            debugStaticBodyColor: 0x000000
        }
    },
    scene: [Scene1]
};

let game = new Phaser.Game(config);