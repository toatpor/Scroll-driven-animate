import { store } from "../store.js";

class TeamBackground {
  element = document.querySelector(".team-inner");

  animate() {
    this.element.animate(
      [
        {
          backgroundColor: "var(--bg)",
        },
        { backgroundColor: "#0a120f", offset: 0.1 },
        ,
        { backgroundColor: "var(--bg)", offset: 0.8 },
      ],
      {
        timeline: store.store.getState().teamViewTimeline,
        fill: "both",
        easing: "linear",
        rangeStart: "contain",
      }
    );
  }
}

export const teamBackground = new TeamBackground();
