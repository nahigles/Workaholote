

import Planta1 from './Plantas/planta1.js';
import Planta2 from './Plantas/planta2.js';
import UiScene from './escenas/UiScene.js';
import MainMenu from './UI/MainMenu.js';
import MJ_Plataformas from './Minijuegos/mj_Plataformas.js';
import PauseMenuMJPlataforma from './Minijuegos/pauseMJPlataformas.js';
import PauseMenuMJBasura from './Minijuegos/pauseMJBasura.js';
import MJ_Basuras from './Minijuegos/mj_Basuras.js';
import PauseMenuPlanta1 from './Plantas/pausePlanta1.js';
import PauseMenuPlanta2 from './Plantas/pausePlanta2.js';
	// Configuracion phaser
    var config = {
        parent: "canvas", // Para que el canvas no aparezca abajo del todo en la página
	    type: Phaser.AUTO, //type: Phaser.WEBGL
	    pixelArt: true, 
        backgroundColor: '#e7d1ff',
	    scene:[MainMenu,Planta1, Planta2, MJ_Plataformas, MJ_Basuras,PauseMenuMJPlataforma,PauseMenuMJBasura,UiScene,PauseMenuPlanta1,PauseMenuPlanta2 ], // Metodos que queremos en nuestros scripts
        scale:{
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY, // Centra horizontalmente // autoCenter: Phaser.Scale.CENTER_BOTH
            mode: Phaser.Scale.FIT, // Para que sirva para cualquier resolucion
            width: 600,
            height: 400
           // zoom: 35    
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
    
    
   