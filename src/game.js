import Planta1 from './Plantas/planta1.js';
import Planta2 from './Plantas/planta2.js';
import Planta3 from './Plantas/planta3.js';
import Planta4 from './Plantas/planta4.js';
import Planta4_2 from './Plantas/planta4_2.js';
import Planta5 from './Plantas/planta5.js';
import UiScene from './UI/UiScene.js';
import MainMenu from './UI/MainMenu.js';
import MJ_Plataformas from './Minijuegos/mjPlataformas/mj_Plataformas.js';
import MJ_Basuras from './Minijuegos/mjBasuras/mj_Basuras.js';
import MJ_Nave from './Minijuegos/mjNave/mj_Nave.js';
import PauseMenu from './UI/PauseMenu.js';
import MJ_Carpetas from './Minijuegos/mjCarpetas/mj_Carpetas.js';
import PuertaSecreta from './Misiones/PuertaSecreta.js';

	// Configuracion phaser
    var config = {
        parent: "canvas", // Para que el canvas no aparezca abajo del todo en la página
	    type: Phaser.AUTO, //type: Phaser.WEBGL
	    pixelArt: true, 
        backgroundColor: '#e7d1ff',
	    scene:[MainMenu,Planta1, Planta2, Planta3, Planta4, Planta4_2, Planta5, MJ_Plataformas, MJ_Basuras, MJ_Carpetas, MJ_Nave, UiScene, PauseMenu, PuertaSecreta ], // Metodos que queremos en nuestros scripts
        scale:{
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY, // Centra horizontalmente // autoCenter: Phaser.Scale.CENTER_BOTH
            mode: Phaser.Scale.FIT, // Para que sirva para cualquier resolucion
            width: 600,
            height: 400  
        },
        
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 400},
                // Visibilidad de las colisiones 
                debug: false
            }
        }
    }
    // Pasamos como parametro la configuracion
    new Phaser.Game(config);
    
    
   