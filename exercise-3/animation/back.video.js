import { store } from "../store.js";

class BackVideo {
  element = document.querySelector(".back-video");
  animate() {
    this.element.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: "scale(1.1)",
          offset: 0.75,
        },
      ],
      {
        easing: "ease-in-out",
        fill: "forwards",
        range: "exit-crossing",
        timeline: store.store.getState().headerViewTimeline,
      }
    );
  }
}

export const backVideo = new BackVideo();
