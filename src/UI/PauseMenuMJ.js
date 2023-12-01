
import Button from './Button.js';
export default class PauseMenuMJ extends Phaser.Scene {
	/**
	 * Constructor, deficimos la key que tendrá la escena, nos sirve para los cambios de escena 
	 */
	constructor(){	
		super({ key: 'PauseMenuMJ' });

		this.self = this;
	}
	init(){
	}
    preload(){
        this.load.image('resumeButton', './assets/images/UI/PauseMenu/resumeButton.png');
        this.load.image('background', './assets/images/Backgrounds/fondonegro.png');
        this.load.image('exitButton', './assets/images/UI/PauseMenu/exitButton.png');
        this.load.image('officeButton', './assets/images/UI/PauseMenu/officeButton.png');
    }
    create(){
        this.add.image(0,0,'background').setScale(2,2);  
		// BotonVolverMinijuego
		this.resumeButton = new Button(this,300, 105, 'resumeButton', ()=>{this.scene.resume("mj_Plataformas");},  ()=>{this.scene.stop();},  ()=>{});
        //BotonVolverPlanta
       this.officeButton = new Button(this, 300, 200, 'officeButton', ()=>{this.scene.resume("Planta1");},   ()=>{this.scene.stop("mj_Plataformas");}, ()=>{this.scene.stop();});
        // BotonSalir
        this.buttonExit = new Button(this, 300, 300, 'exitButton', ()=>{this.scene.start("MainMenu");}, ()=>{}, ()=>{});
    }
    update(){
    }
}