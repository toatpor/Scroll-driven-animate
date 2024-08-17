import { store } from "../store.js";

class Title {
  titleOne = document.querySelector(".first");
  titleSec = document.querySelector(".second");

  animate() {
    this.titleOne.animate(
      [
        {
          display: "block",
          opacity: 1,
          transform: "scale(1)",
        },
        {
          display: "none",
          transform: "scale(0)",
          opacity: 0,
        },
      ],
      {
        easing: "ease-in-out",
        fill: "both",
        rangeStart: "exit-crossing 0%",
        rangeEnd: "exit-crossing 10%",
        timeline: store.store.getState().headerViewTimeline,
      }
    );

    this.titleSec.animate(
      [
        {
          display: "none",
          transform: "scale(0)",
          opacity: 0,
        },
        { display: "block", opacity: 1, transform: "scale(1)", offset: 0.75 },

        { transform: "scale(0.3) rotate(5deg)", opacity: 0, offset: 1 },
      ],
      {
        easing: "ease-in-out",
        // animation range set start and end of animation that attachment range along timeline
        rangeStart: "exit-crossing 10%",
        rangeEnd: "exit-crossing 70%",
        fill: "both",
        timeline: store.store.getState().headerViewTimeline,
      }
    );
  }
}

export const title = new Title();
