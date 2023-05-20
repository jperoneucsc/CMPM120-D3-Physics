class Scene1 extends Phaser.Scene
{
    preload()
    {
        this.load.image("ruleboard", "../assets/ruleboard.png");
    }
    create ()
    {
        // camera
        var cam = this.cameras.main;
        
        // Ruleboard
        this.add.image(1000, 250, 'ruleboard').setScale(0.5);
        this.matter.world.setBounds();

        this.matter.add.mouseSpring();

        const group = this.matter.world.nextGroup(true);
        

        const bridge = this.matter.add.stack(160, 290, 15, 1, 0, 0, (x, y) => Phaser.Physics.Matter.Matter.Bodies.rectangle(x - 20, y, 53, 20, {
            collisionFilter: { group: group },
            chamfer: 5,
            density: 0.005,
            frictionAir: 0.05,
        }));

        this.matter.add.chain(bridge, 0.4, 0, -0.3, 0, {
            stiffness: 0.75,
            length: 1,
        });
        

        // Boxes flying around
        const stack = this.matter.add.stack(250, 50, 6, 3, 0, 0, (x, y) => Phaser.Physics.Matter.Matter.Bodies.rectangle(x, y, 50, 50, Phaser.Math.Between(20, 40)));

        // Rectangle on left
        let rect = this.add.rectangle(30, 510, 220, 520);
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

    }


    
}