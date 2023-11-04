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
		this.jugador = new Phaser.GameObjects.Sprite(scene, x, y, key, 0);
		this.jugador.setOrigin(0,0).setScale(3.0,3.0);
		this.add(this.jugador); // Añadimos al contenedor
		
		// Ejecutamos la animación 'idle'
		this.jugador.play('idle')
		console.log(this);

		// Speed
		this.speed = 3;

		// INPUT
		this.a = this.scene.input.keyboard.addKey('A'); //izquierda
		this.d = this.scene.input.keyboard.addKey('D'); //derecha
    }

	preUpdate(t, dt){
		// preupdate del padre, en este caso container
		this.jugador.preUpdate(t, dt);
		
		// Si se pulsa letra A
		if(this.a.isDown){ 
			this.x += (dt/20)*2*-this.speed;
			this.jugador.setFlip(true, false);
			this.jugador.play('walk', true)
		} 

		// Si se pulsa letra D
		else if(this.d.isDown){
			this.x += (dt/20)*2*this.speed;
			this.jugador.setFlip(false, false);
			this.jugador.play('walk', true)
		} 

		else {
			this.jugador.play('idle', true)
		}

	}
}
