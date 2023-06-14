class Intro extends Phaser.Scene
{
    constructor()
    {
        super('intro');
    }

    preload()
    {
        this.load.image("titlescreen", "./assets/titlescreen.png");
        this.load.image("buttonOutline", "./assets/buttonOutline.png");
    }

    create()
    {
        // get the screen width + height
        const width = this.scale.width;
        const height = this.scale.height;

          
        this.add.image(width*.5, height*.5, "titlescreen");
        let outline = this.add.image(width*.5, height*.5, "buttonOutline").setScale(1);
        
        let startButton = this.add.rectangle(width*.5, 450, 645, 180)
        .setOrigin(0.5, 0.9)
        .setInteractive()
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.scene.start('scene1');
        })
        .on(Phaser.Input.Events.POINTER_OVER, () => {
        outline.setScale(1.05);
        })
        .on(Phaser.Input.Events.POINTER_OUT, () => {
        outline.setScale(1);
        })

        const textBox = this.add.text(640, 660, "By John Perone", {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#ffffff',
        });
        // Set the text box to be centered horizontally
        textBox.setOrigin(0.5);

        // Set the text box to be white
        textBox.setColor('#ffffff');
    }
}
