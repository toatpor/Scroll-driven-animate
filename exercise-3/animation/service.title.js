import { store } from "../store.js";

class TitleService {
  element = document.querySelector(".content > h2");

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
        timeline: store.store.getState().serviceTimeline,
        easing: "linear",
        fill: "both",
        rangeStart: "entry-crossing 20vh",
        rangeEnd: "entry-crossing 40vh",
      }
    );
  }
}

export const titleService = new TitleService();
