import plantaBase from '../escenas/plantaBase.js';
import Jugador from '../Personajes/jugador.js';

export default class Planta4_2 extends plantaBase {
	/**
	 * Nivel 1
	 * @extends plantaBase
	 */

	constructor(){	
		super('Planta4_2', 'Planta5', 'mj_Nave', 'level1', 'tiles', 560);
	}

	init(){
		super.init();
	}

    preload(){
        super.preload();
		this.load.spritesheet('playerAnim', './assets/images/Player/AnimationSheet.png', {frameWidth: 24, frameHeight: 24});

		// IMAGENES MAPA
		this.load.tilemapTiledJSON('tilemap_Planta_4_2', './assets/Prueba_Mapa/mapa_planta_4_2_purple.json');
        this.load.image('tileset_architecture_purple', 'assets/officeAssets/Architecture/tiles_architecture_purple.png');
        this.load.image('tileset_furniture_purple', 'assets/officeAssets/Furniture/tiles_furniture_purple.png');
        this.load.image('tileset_objects_purple', 'assets/officeAssets/Objects/tiles_objects_purple.png');
        this.load.image('tileset_door_purple', 'assets/officeAssets/Doors/tile_door_purple.png');
    }

    create(){
		super.create();

		// TILEMAP
		this.map = this.make.tilemap({ 
			key: 'tilemap_Planta_4_2', 
			tileWidth: 16, 
			tileHeight: 16,
			width : 100,
			height : 100
		});
		
		// tiles
		const tileset_architecture = this.map.addTilesetImage('tiles_architecture_purple', 'tileset_architecture_purple');  
		const tileset_furniture = this.map.addTilesetImage('tiles_furniture_purple', 'tileset_furniture_purple');  
		const tileset_objects = this.map.addTilesetImage('tiles_objects_purple', 'tileset_objects_purple');  
		const tileset_door = this.map.addTilesetImage('tile_door_purple', 'tileset_door_purple');  
		//const tileset_plants = this.map.addTilesetImage('tiles_plantas_yellow', 'tileset_plants_yellow');  
		
		// Layers 
		this.backgroundLayer = this.map.createLayer('Background', tileset_architecture);
		this.wallLayer = this.map.createLayer('Walls', tileset_architecture);
		this.windowsLayer = this.map.createLayer('Windows', tileset_architecture);
		this.chairsLayer2 = this.map.createLayer('Chairs2', [tileset_objects]);
		this.objectsLayer2 = this.map.createLayer('Furniture2', [tileset_objects, tileset_furniture]);
		this.objectsLayer = this.map.createLayer('Furniture', [tileset_objects, tileset_furniture]);
		this.chairsLayer = this.map.createLayer('Chairs', [tileset_objects]);
		this.doorLayer = this.map.createLayer('Door', [tileset_door]);

		// Colisiones con las paredes
		this.wallLayer.setCollisionByExclusion([-1]);

		// JUGADOR POR CAPA DE OBJETOS	
		this.jugador = this.map.createFromObjects('Jugador', {
			name: 'Jugador',
			classType: Jugador
		})[0];

		// CAMARA
		this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.height);//ancho  y alto nivel
		this.cameras.main.startFollow(this.jugador);
		this.cameras.main.setZoom(3.2);

		// Colisiones MAPA 
		this.physics.add.collider(this.jugador, this.wallLayer);

		this.p = this.input.keyboard.addKey('P');
    }

    update(){

		super.update();

		if(this.p.isDown){ 
			this.scene.start('Planta5');
			this.scene.stop();
			console.log("Paso de P4_2 a P5")
		}	
    }

	onPause(){
		this.jugador.onPauseInput();
	}
}