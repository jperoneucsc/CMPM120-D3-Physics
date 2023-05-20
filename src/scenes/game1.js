class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }

    preload()
    {
        this.load.image("ruleboard", "../assets/ruleboard.png");
    }
    create ()
    {

        // ball counter
        this.ballsUsed = 0;

        // Ruleboard
        this.add.image(1000, 250, 'ruleboard').setScale(0.5);
        
        // world bounds
        // Set up the left wall
        this.matter.world.setBounds(0, 0, 2560, 720, 64, false, false, false, true);
        // Set camera bounds
        //this.cameras.main.setBounds(-1000, 0, 2560, 2000, 64, true, false, false, true);


        this.matter.add.mouseSpring();

        const group = this.matter.world.nextGroup(true);
        

        const bridge = this.matter.add.stack(160, 290, 15, 1, 0, 0, (x, y) => Phaser.Physics.Matter.Matter.Bodies.rectangle(x - 20, y, 53, 20, {
            collisionFilter: { group: group },
            chamfer: 5,
            density: 0.05,
            frictionAir: 0.05,
        }));

        this.matter.add.chain(bridge, 0.4, 0, -0.3, 0, {
            stiffness: 0.75,
            length: 1,
        });
        

        
        
        // Boxes flying around
        const stack = this.matter.add.stack(1050, 50, 3, 9, 0, 0, (x, y) => Phaser.Physics.Matter.Matter.Bodies.rectangle(x, y, 50, 50, Phaser.Math.Between(20, 40)));

        // Rectangle on left
        let rect = this.add.rectangle(30, 510, 220, 520);
        this.matter.add.gameObject(rect);
        rect.setStatic(true);
        // Rectangle for floor
        let floor = this.add.rectangle(350, 620, 520, 520);
        this.matter.add.gameObject(rect);
        rect.setStatic(true);


        this.matter.add.worldConstraint(bridge.bodies[0], 2, 0.9, {
            pointA: { x: 140, y: 250 },
            pointB: { x: -25, y: 0 }
        });

        this.matter.add.worldConstraint(bridge.bodies[bridge.bodies.length - 1], 2, 0.9, {
            pointA: { x: 850, y: 720 },
            pointB: { x: 2, y: 0 }
        });
    }

    update()
    {
        // is player pressing buttons
        const space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        const leftarrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        const rightarrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


        // projectiles
        const ball = Phaser.Physics.Matter.Matter.Bodies.circle(500, -10, 25, 25, Phaser.Math.Between(20, 40));

        if (space.isDown){
            this.matter.world.add(ball);
            this.ballsUsed = this.ballsUsed + 1;
        }

        if (rightarrow.isDown){
            this.cameras.main.x = this.cameras.main.x - 30;
        }else if (leftarrow.isDown){
            this.cameras.main.x = this.cameras.main.x + 30;
        }
    }


    
}