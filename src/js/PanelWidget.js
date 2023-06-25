export default class PanelWidget {
  constructor() {
    this.hit = 0;
    this.miss = 0;
  }

  showScore() {
    const score = document.querySelector(".ctrl-panel-score");
    score.textContent = ` 
        Попал - ${this.hit}
        Мимо - ${this.miss}`;
  }

  addHit() {
    this.hit += 1;
    this.showScore();
  }

  addMiss() {
    this.miss += 1;
    this.showScore();
  }

  clearScore() {
    this.hit = 0;
    this.miss = 0;
    this.showScore();
  }

  showResult(text) {
    const score = document.querySelector(".ctrl-panel-score");
    score.textContent = text;

    const btn = document.querySelector(".ctrl-panel-btn");
    btn.classList.remove("hidden");
  }
}
