import { store } from "../store.js";

class TeamTitle {
  element = document.querySelector(".team-inner").firstElementChild.nextElementSibling;
  animate() {
    this.element.animate(
      [
        {
          opacity: 0,
          transform: "translateY(-30px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        timeline: store.store.getState().teamViewTimeline,
        easing: "linear",
        fill: "both",
        rangeStart: "entry-crossing 20vh",
        rangeEnd: "entry-crossing 40vh",
      }
    );
  }
}

export const teamTitle = new TeamTitle();
