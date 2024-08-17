// in case client reduce motion to get better performance
class MediaQuery {
  media = matchMedia("(prefers-reduce-motion)");
  videoElement = document.querySelectorAll(".bg-video");

  reduceMotion() {
    if (!this.media.matches) this.videoElement.forEach((el) => el.play());
    this.videoElement.forEach((el) => el.pause());
  }

  addEvent() {
    this.media.addEventListener("change", this.reduceMotion);
  }
}

export const mediaQuery = new MediaQuery();
