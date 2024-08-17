import { store } from "../store.js";

class FrontVideo {
  element = document.querySelector(".front-video");
  video = document.querySelector(".front-video").querySelector("video");

  animate() {
    this.element.animate(
      [
        {
          padding: "3px",
          clipPath: "polygon(0% 0%, 30% 0%, 50% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 100%)",
          offset: 0.7,
        },
        {
          paddingLeft: "0px",
          paddingRight: "0px",
          offset: 0.75,
        },
        {
          clipPath: "polygon(0% 0%,30% 0%, 50% 0%, 100% 0%, 100% 90%, 30% 100% , 0% 90%)",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "3px",
        },
      ],
      {
        // specify for the element when animation is not playing
        fill: "both",
        direction: "alternate",
        // timeline of animation default document.timeline
        timeline: store.store.getState().headerViewTimeline,
        // when animation gonna trigger
        range: "exit-crossing",
        // how animation speed curve of an animation
        easing: "ease-in-out",
      }
    );

    this.video.animate(
      [
        {
          clipPath: "polygon(0% 0%, 30% 0%, 50% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 100%)",
          filter: "saturate(1)",
          // depend on Time-line set to view timeline this will effect when
          // scroll to 75% of view
          offset: 0.7,
        },
        {
          clipPath: "polygon(0% 0%,30% 0%, 50% 0%, 100% 0%, 100% 90%, 30% 100% , 0% 90%)",
          filter: "saturate(0.2)",
        },
      ],
      {
        fill: "forwards",
        timeline: store.store.getState().headerViewTimeline,
        range: "exit-crossing",
        easing: "ease-in-out",
      }
    );
  }
}

export const frontVideo = new FrontVideo();
