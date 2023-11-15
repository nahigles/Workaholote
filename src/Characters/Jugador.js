export default class Jugador extends Phaser.GameObjects.Container {
	/**
	 * Constructor del pato
	 * @param {Scene} scene -  escena
	 * @param {number} x - posición X en la escena
	 * @param {number} y - posición Y en la escena
	 */
	constructor(scene, x, y, key){
		// Llamamos al constructor del padre
		super(scene, x, y);
		this.speed = 140; // Nuestra velocidad de movimiento será 140

		// Animaciones del jugador
		this.scene.anims.create({
			key: 'walk',
			frames: scene.anims.generateFrameNumbers(key, {start:8, end:11}),
			frameRate: 2,
			repeat: -1
		});

		this.scene.anims.create({
			key: 'idle',
			frames: scene.anims.generateFrameNumbers(key, {start:0, end:1}),
			frameRate: 2,
			repeat: -1
		});


		
		
		// Guardamos escena y añadimos jugador a escena
		this.scene = scene;
		this.scene.add.existing(this);
		
		//sprite jug
		this.jugador = new Phaser.GameObjects.Sprite(scene, 0, 0, key, 0);
		this.jugador.setOrigin(0.5,0.5).setScale(1.0,1.0);
		
		this.add(this.jugador); // Añadimos al contenedor
		
		// Ejecutamos la animación 'idle'
		this.jugador.play('idle')
		console.log(this);

		// INPUT
		this.a = this.scene.input.keyboard.addKey('A'); //izquierda
		this.d = this.scene.input.keyboard.addKey('D'); //derecha
		this.cursors = this.scene.input.keyboard.createCursorKeys();

		// Físicas
		this.width = 24
		this.height = 24
		scene.physics.add.existing(this);
    }

	preUpdate(t, dt){
		// preupdate del padre, en este caso container
		this.jugador.preUpdate(t, dt);
		
		// Si se pulsa letra A
		if(this.a.isDown || this.cursors.left.isDown){ 
			this.body.setVelocityX(-this.speed);
			this.jugador.setFlip(true, false);
			this.jugador.play('walk', true);
		} 

		// Si se pulsa letra D
		else if(this.d.isDown || this.cursors.right.isDown){
			this.body.setVelocityX(this.speed);
			this.jugador.setFlip(false, false);
			this.jugador.play('walk', true);
		} 

		else {
			this.jugador.play('idle', true);
			this.body.setVelocityX(0);
		}
	}
}
