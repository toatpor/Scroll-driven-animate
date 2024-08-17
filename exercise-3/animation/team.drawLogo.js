import { store } from "../store.js";

class DrawLogo {
  element = document.querySelector(".team-inner").querySelectorAll(".cls-1");
  animate() {
    this.element.forEach((el) => {
      el.animate(
        [
          {
            strokeDashoffset: 1000,
          },
          {
            strokeDashoffset: 0,
          },
        ],
        {
          timeline: store.store.getState().teamViewTimeline,
          fill: "both",
          rangeStart: "contain 0%",
          rangeEnd: "contain 20%",
        }
      );
    });
  }
}

export const drawLogo = new DrawLogo();
