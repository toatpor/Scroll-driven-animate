import { store } from "../store.js";

class TeamImg {
  element = document.querySelector(".grid").querySelectorAll(".card");

  animate() {
    this.element.forEach((el) => {
      el.firstElementChild.animate(
        [
          {
            transform: "rotateY(0)",
          },
          {
            transform: "rotateY(365deg)",
          },
        ],
        {
          timeline: store.store.getState().teamViewTimeline,
          fill: "both",

          easing: "linear",
          rangeState: "contain",
        }
      );
    });
  }
}

export const teamImg = new TeamImg();
