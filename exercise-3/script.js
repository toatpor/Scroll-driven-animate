import { backVideo } from "./animation/back.video.js";
import { card } from "./animation/card.js";
import { frontVideo } from "./animation/front.video.js";
import { animateLogo } from "./animation/logo.js";
import { nav } from "./animation/nav.js";
import { mediaQuery } from "./animation/reduceMotion.js";
import { cardService } from "./animation/service.card.js";
import { serviceCard } from "./animation/service.scale.js";
import { titleService } from "./animation/service.title.js";
import { teamBackground } from "./animation/team.backgroud.js";
import { teamCard } from "./animation/team.card.js";
import { drawLogo } from "./animation/team.drawLogo.js";
import { teamImg } from "./animation/team.img.js";
import { teamSection } from "./animation/team.section.js";
import { teamTitle } from "./animation/team.title.js";
import { title } from "./animation/title.js";

document.addEventListener("DOMContentLoaded", () => {
  frontVideo.animate();
  animateLogo.animate();
  nav.animate();
  backVideo.animate();
  title.animate();
  card.animate();
  teamSection.animate();
  teamBackground.animate();
  teamImg.animate();
  teamTitle.animate();
  teamCard.animate();
  drawLogo.animate();

  titleService.animate();
  cardService.animate();
  serviceCard.animate();

  mediaQuery.addEvent();
});
