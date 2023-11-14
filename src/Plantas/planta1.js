import plantaBase from '../escenas/plantaBase.js';
import Jugador from '../Characters/Jugador.js';
import NPC from '../Characters/NPCBase.js';

export default class Planta1 extends plantaBase {
	/**
	 * Nivel 1
	 * @extends plantaBase
	 */

	constructor(){	
		super('Planta1', "planta2", "mj_plataformas", 'level1', 'tiles', 560);
		//por ahora lo d tiles no tiene sentido
	}

	init(){
		super.init();

	}
    preload(){
		//this.load.image("player", "./assets/images/AjoloteTrajeado.png" );
		this.load.spritesheet('playerAnim', './assets/images/Player/AnimationSheet.png', {frameWidth: 24, frameHeight: 24});
		this.load.spritesheet('NPCAnim', './assets/images/Characters/Emilio.png', {frameWidth: 24, frameHeight: 36})
		this.load.script('WebFont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
		this.load.image('dialogBox', 'assets/images/Hud/dialogBox.png');
    }

    create(){
		super.create();

		// Jugador
		this.explPLYR = new Jugador(this, 100, 50, 'playerAnim');
		
		this.NPCGroup = this.physics.add.group();
		this.NPCGroup.add(new NPC(this, 100, 50, 'NPCAnim', 'Emilio'));
		this.NPCGroup.add(new NPC(this, 250, 50, 'NPCAnim', 'Aurelia'));
		this.NPCGroup.add(new NPC(this, 400, 50, 'NPCAnim', 'Julia'));

		this.scene.launch("UiScene", {
			home: this,
			player: this.explPLYR,
			NPCs: this.NPCGroup
		});
    }

    update(){
		super.update();
    }

	onPause(){
		this.explPLYR.onPauseInput();
	}
}