
import Jugador from '../Personajes/jugador.js';
import Button from './Button.js';
export default class MainMenu extends Phaser.Scene {
	/**
	 * Constructor, deficimos la key que tendrá la escena, nos sirve para los cambios de escena 
	 */
	constructor(){	
		super({ key: 'MainMenu' });

		this.self = this;
	}
	init(){
	}
    preload(){
		this.load.spritesheet('playerAnim', './assets/images/Player/AnimationSheet.png', {frameWidth: 24, frameHeight: 24});
		//this.load.image("playButton", "./assets/images/UI/MainMenu/playButton.png" );
        this.load.spritesheet("playButton2", "./assets/images/UI/MainMenu/playButton3.png", {frameWidth: 300, frameHeight: 120});
		
    }
    create(){
		// BotonPlay
		this.PlayButton = new Button(this, 300, 200, 'playButton2', ()=>{this.scene.start("Planta1");}, ()=>{}, ()=>{}, ()=>{});
		this.PlayButton.changeScale(1.2,1.2);

		// Jugadores
		this.player1 = new Jugador(this, 100, 50, 'playerAnim');
		this.player1.onPauseInput();
		this.player1.jumpAnim();
		this.player1.body.setCollideWorldBounds(true);

		this.player2 = new Jugador(this, 200, 50, 'playerAnim');
		this.player2.onPauseInput();
		this.player2.sitAnim();
		this.player2.body.setCollideWorldBounds(true);

		
		// Desactivo Input para que no se muevan


    }
    update(){
    }
}