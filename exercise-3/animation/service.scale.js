import { store } from "../store.js";

class ServiceCard {
  cards = document.querySelector(".cards-grid").querySelectorAll(".card-inner");
  timeline = document.querySelector(".services").querySelector(".cards");

  animate() {
    this.cards.forEach((el, i) => {
      el.animate([{ borderColor: "var(--b)", transform: `rotate(var(--r)) scale(${1 - 0.05 * (this.cards.length - (i + 1))})` }], {
        fill: "both",
        // each card need to have start animate different period of time
        rangeStart: `exit-crossing ${((i + 1 - 1) / this.cards.length) * 1 * 100 + "%"}`,
        rangeEnd: `exit-crossing  ${((i + 1) / this.cards.length) * 1 * 100 + "%"} `,
        timeline: store.store.getState().cardTimeline,
      });
    });
  }
}

export const serviceCard = new ServiceCard();
