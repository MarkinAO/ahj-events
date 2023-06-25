import GameFieldWidget from "./GameFieldWidget";
import GameControl from "./GameControl";
import PanelWidget from "./PanelWidget";

// TODO: write code here

const gameFieldWidget = new GameFieldWidget();
const panelWidget = new PanelWidget();
const gameControl = new GameControl(gameFieldWidget, panelWidget);

gameControl.init();
