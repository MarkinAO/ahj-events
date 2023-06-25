export default class GameFieldWidget {
  constructor() {
    this.size = 16;
    this.field = null;
  }

  draw() {
    const field = document.querySelector(".field-container");
    let child = field.firstChild;
    while (child) {
      child.remove();
      child = field.firstChild;
    }

    for (let i = 0; i < this.size; i++) {
      const item = document.createElement("div");
      item.classList.add("field-item");
      field.append(item);
    }
    this.field = Array.from(document.querySelectorAll(".field-item"));
  }

  showGoblin(index) {
    const item = this.field[index];
    item.classList.add("goblin");
  }

  removeGoblin() {
    this.field.forEach((cell) => cell.classList.remove("goblin"));
  }
}
