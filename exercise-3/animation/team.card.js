import { store } from "../store.js";

class TeamCard {
  element = document.querySelector(".grid").querySelectorAll(".card");

  animate() {
    this.element.forEach((el) =>
      el.animate(
        [
          {
            opacity: 0,
            clipPath: "inset(10%)",
          },
          {
            opacity: 1,
            clipPath: "inset(0%)",
          },
        ],
        {
          timeline: store.store.getState().teamViewTimeline,
          easing: "linear",
          fill: "both",
          rangeStart: "entry-crossing 60vh",
          rangeEnd: "entry-crossing 80vh",
        }
      )
    );
  }
}

export const teamCard = new TeamCard();
