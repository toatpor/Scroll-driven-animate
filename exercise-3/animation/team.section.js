import { store } from "../store.js";

class TeamSection {
  innerElement = document.querySelector(".team-grid");

  animate() {
    this.innerElement.animate(
      [
        { transform: "translateX(0%)" },
        {
          // calculate the end of inner section
          // shift animation to the end
          transform: "translateX(calc(-100% + 100vw))",
        },
      ],
      {
        timeline: store.store.getState().teamViewTimeline,
        easing: "linear",
        fill: "both",
        rangeStart: "contain",
      }
    );
  }
}

export const teamSection = new TeamSection();
