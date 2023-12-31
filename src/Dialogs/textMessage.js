export default class TextMessage extends Phaser.GameObjects.Container {
    /**
     * Contenedor para los mensajes
     * @extends Phaser.GameObjects.Container 
     * @param {Phaser.Scene} scene - Escena a la que pertenece. 
     * @param {number} x - Posicion en x
     * @param {number} y - Posicion en y
     * @param {number} width - Ancho
     * @param {number} height - Alto
     * @param {string} message - Mensaje
     */
      constructor(scene, x, y, width, message) {
        super(scene, x, y);
        this.scene = scene; //DialogManager
        this.x = x;
        this.y = y;
        this.width = width;
        this.Message = message; //mensaje completo a imprimir
        
        this.textSize = 26;

        this.createText(); //Creación del texto
        this.scene.add.existing(this); //añadir a la escena para poder activar el preupdate
      }
  
  
      // Resetea las variables de estado del cuadro de diálogo y cambia su texto al del nodo actual del dialog manager.
      reset() {
        this.contChar = 0;
        this.delay = 0;
        this.finished = false;
        this.actWritten = "";
        this.text.setText(this.actWritten); 
      }
  
  
      // Inicializa las propiedades del texto del cuadro de dialogo
      createText() {
        //Variables para gestionar la escritura del diálogo
        this.contChar = 0;        // Para contar los caractéres escritos
        this.screens = 0;
        this.screenLetters = 100;
        this.actWritten = "";     // Las letras escritas de momento
        this.delay = 0;           // Contador para hacer paradas entre char
        this.finished = false;    // Informa si un mensaje ya se ha terminado de imprimir
        this.textSpeed = 40;     // Vlocidad al imprimir el texto, en ms
  
        // Crea el texto
        this.text = this.scene.add.text(this.x,this.y , "", {
          color:'#7c00a6'
        });
        this.text.setFontFamily("Pixelify Sans");
        this.text.setFontSize(this.textSize);
  
        this.text.setWordWrapWidth(this.width - 20 * 2);

        this.text.setResolution(2);
        this.text.setDepth(2);
      }
  
  
      // Al terminar todos los mensajes, se destruye
      onMessageFinished() {
        this.text.destroy();
        this.destroy() ;
      }
  
  
      // Recibir el siguiente mensaje a imprimir (llamado por DialogManager)
      setNewMessage(newMessage) {
        this.reset();
        this.Message = newMessage;
      }
  
  
    preUpdate(t, dt) {
      // Si no ha terminado de aparecer todo el mensaje
      if (!this.finished) {
        if (this.delay <= 0) {
          if (this.screenLetters*this.screens + this.contChar < this.Message.length) {
            
            if (this.contChar > this.screenLetters){
              this.screens++;
              this.actWritten = "...";
              this.contChar = 0;
            }

            // Actualiza el número de caracteres impresos e imprime el texto
            this.actWritten += this.Message[this.screenLetters*this.screens + this.contChar];
            this.text.setText(this.actWritten);

            this.contChar++;
            this.delay = this.textSpeed;
          } 
          else {
            this.finished = true;
          }
        } else this.delay -= dt; //esperando en s para imprimir el sig char
      }
    }
  }
  