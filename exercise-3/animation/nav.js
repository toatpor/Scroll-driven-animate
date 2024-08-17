import { store } from "./../store.js";

class Nav {
  element = document.querySelector(".nav");

  animate() {
    this.element.animate(
      [
        {
          backgroundColor: "transparent",
          height: "100px",
        },
        {
          backgroundColor: "var(--bg)",
          height: "var(--header-height)",
        },
      ],
      {
        fill: "forwards",
        direction: "alternate",
        rangeStart: "exit-crossing 50%",
        rangeEnd: "exit-crossing 70%",
        timeline: store.store.getState().headerViewTimeline,
      }
    );
  }
}

export const nav = new Nav();
