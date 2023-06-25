export default class GameControl {
  constructor(gameFieldWidget, panelWidget) {
    this.gameFieldWidget = gameFieldWidget;
    this.panelWidget = panelWidget;
    this.intId = null;
    this.accessField = true;
  }

  init() {
    const container = document.querySelector(".field-container");
    container.addEventListener("click", (event) => this.onCellClick(event));

    const btn = document.querySelector(".ctrl-panel-btn");
    btn.addEventListener("click", (event) => this.onBtnClick(event));

    this.startGame();
  }

  startGame() {
    this.gameFieldWidget.draw();
    this.panelWidget.showScore();
    this.accessField = true;

    this.intId = setInterval(() => {
      this.releaseGoblin();
    }, 700);
  }

  releaseGoblin() {
    const field = this.gameFieldWidget.field;
    let flag = true;
    let index = null;

    while (flag) {
      index = Math.round(
        Math.random() * (this.gameFieldWidget.field.length - 1)
      );
      if (!field[index].classList.contains("goblin")) flag = false;
    }

    this.accessField = true;
    this.gameFieldWidget.removeGoblin();
    this.gameFieldWidget.showGoblin(index);
  }

  onCellClick(event) {
    event.preventDefault();
    if (!this.accessField) return;
    this.accessField = false;
    const field = this.gameFieldWidget.field;
    const index = field.indexOf(event.target);

    if (index !== -1 && field[index].classList.contains("goblin")) {
      this.panelWidget.addHit();
    } else {
      this.panelWidget.addMiss();
    }
    this.checkScore();
  }

  checkScore() {
    if (this.panelWidget.hit === 10) {
      this.panelWidget.showResult("Победа!!!");
      clearInterval(this.intId);
      this.accessField = false;
    }
    if (this.panelWidget.miss === 5) {
      this.panelWidget.showResult("Ты проиграл!");
      clearInterval(this.intId);
      this.accessField = false;
    }
  }

  onBtnClick(event) {
    event.preventDefault();
    this.startGame();
    const btn = document.querySelector(".ctrl-panel-btn");
    this.panelWidget.clearScore();
    btn.classList.add("hidden");
  }
}
