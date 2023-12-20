import dialogVictoria from "../Dialogs/dialogText/dialogsP1/Victoria.json"  assert { type: 'json' };
import dialogAlvaro from "../Dialogs/dialogText/dialogsP1/Alvaro.json"  assert { type: 'json' };
import dialogAlma from "../Dialogs/dialogText/dialogsP1/Alma.json"  assert { type: 'json' };
import dialogEmilio from "../Dialogs/dialogText/dialogsP1/Emilio.json"  assert { type: 'json' };
import dialogAndrea from "../Dialogs/dialogText/dialogsP2/Andrea.json"  assert { type: 'json' };
import dialogMelisa from "../Dialogs/dialogText/dialogsP2/Melisa.json"  assert { type: 'json' };
import dialogPedro from "../Dialogs/dialogText/dialogsP2/Pedro.json"  assert { type: 'json' };
import dialogLola from "../Dialogs/dialogText/dialogsP3/Lola.json"  assert { type: 'json' };
import dialogFede from "../Dialogs/dialogText/dialogsP3/Fede.json"  assert { type: 'json' };
import dialogJesus from "../Dialogs/dialogText/dialogsP3/Jesus.json"  assert { type: 'json' };
import dialogArchie from "../Dialogs/dialogText/dialogsP4/Archie.json"  assert { type: 'json' };
import dialogInmaCharlotte from "../Dialogs/dialogText/dialogsP4/InmaCharlotte.json"  assert { type: 'json' };
import dialogConrad from "../Dialogs/dialogText/dialogsP4/Conrad.json"  assert { type: 'json' };

export default class Conversation{
	/**
	 * Constructor
	 * @param {Scene} scene -  escena
	 * @param {string} who - npc _whoIsTalking
	 */
	constructor(UI, planta, who, visited){
		this.UI = UI;
		this.who = who;

		this.conversText;

		if (visited) { this.index = 0;}
		else { this.index = 1; }//por ahora vas a empezar por el primero

		switch (planta){
			case "Planta1":
				switch(who){
					case "Victoria":
						this.conversText = dialogVictoria;
						break;
					case "Alvaro":
						this.conversText = dialogAlvaro;
						break;
					case "Alma":
						this.conversText = dialogAlma;
						break;
					case "Emilio":
						this.conversText = dialogEmilio;
						break;
					default:
				}
				break;
			case "Planta2":
				switch(who){
					case "Andrea":
						this.conversText = dialogAndrea;
						break;
					case "AndreaOver":
						this.conversText = dialogAndrea;
						this.index = 10;
						break;
					case "Melisa":
						this.conversText = dialogMelisa;
						break;
					case "Pedro":
						this.conversText = dialogPedro;
						break;
					default:
				}
				break;
			case "Planta3":
				switch(who){
					case "Lola":
						this.conversText = dialogLola;
						break;
					case "Fede":
						this.conversText = dialogFede;
						break;
					case "Jesus":
						this.conversText = dialogJesus;
						break;
					default:
				}
				break;
			case "Planta4":
				switch(who){
					case "Archie":
						this.conversText = dialogArchie;
						break;
					case "Inma":
						this.conversText = dialogInmaCharlotte;
						break;
					case "Charlotte":
						this.conversText = dialogInmaCharlotte;
						break;
					case "Conrad":
						this.conversText = dialogConrad;
						break;
					default:
				}
				break;

			default:
		}

		this.next();
    }	

	next(choice = "noHay"){		
		console.log("NEXT");
		if (this.conversText.Talk[this.index].who != "End") {
			if (this.conversText.Talk[this.index].who == "Action"){
				let what = this.conversText.Talk[this.index].what;
				this.index = this.conversText.Talk[this.index].nextId;
				console.log("change to index " + this.index);
				this.UI.actions(what);
			}
			else if (this.conversText.Talk[this.index].who == "Choice"){ //TIENE Q TOMAR UNA CHOICE)				
				console.log("Choice");
				if (choice == "noHay"){ //PRIM VEZ
					this.UI.initDialog(this, this.conversText.Talk[this.index].who, 
					"· " + this.conversText.Talk[this.index].a + "\n· " + this.conversText.Talk[this.index].b,
					this.conversText.Talk[this.index].a,
					this.conversText.Talk[this.index].b)
					console.log("init " + this.index);
				}
				else if (choice == "noSabe") {
					this.UI.initDialog(this, "ChoiceStay", 
					"Tienes que tomar una decisión para poder avanzar.\n. " + this.conversText.Talk[this.index].a + "\n· " + this.conversText.Talk[this.index].b,
					this.conversText.Talk[this.index].a,
					this.conversText.Talk[this.index].b)
					console.log("init " + this.index);
				}
				if (choice == "a"){ //ha elegido a
					console.log("A is the choice");
					this.index = this.conversText.Talk[this.index].nextA;
					console.log("change to index " + this.index);
					this.UI.initDialog(this, this.conversText.Talk[this.index].who, this.conversText.Talk[this.index].frase);
					console.log("init " + this.index);
					this.index = this.conversText.Talk[this.index].nextId;
					console.log("change to index " + this.index);
				}
				else if (choice == "b"){ //ha elegido b
					this.index = this.conversText.Talk[this.index].nextB;
					console.log("change to index " + this.index);
					this.UI.initDialog(this, this.conversText.Talk[this.index].who, this.conversText.Talk[this.index].frase);
					console.log("init " + this.index);
					this.index = this.conversText.Talk[this.index].nextId;
					console.log("change to index " + this.index);
				}
			}
			else {
				console.log(this.conversText.Talk[this.index].frase);
				this.UI.initDialog(this, this.conversText.Talk[this.index].who, this.conversText.Talk[this.index].frase);
				console.log("init " + this.index);
				this.index = this.conversText.Talk[this.index].nextId;
				console.log("change to index " + this.index);
			}
		}
		else {
			console.log("End");			
			this.UI.endDialog();
		}
	}
}




