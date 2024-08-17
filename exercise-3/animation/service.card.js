class CardService {
  element = document.querySelector(".cards-grid").querySelectorAll(".card");
  outerElement = document.querySelector(".cards-grid");
  image = document.querySelectorAll(".card-inner > .right");

  animate() {
    //   sticky element need to have space to move in their container
    this.element.forEach((el, i) => {
      // can giving top to animate sticky element
      // need to make sure distance of container enough to all element to stick
      el.style.top = "var(--header-height)";
      // fix by using padding to each element
      el.style.paddingTop = `calc(${i} * var(--card-gap))`;
    });
    //   need to add padding-bottom to container to make container fit with child element
    //   last card, it out of container box so we need to fix by add padding-bottom
    //   to container to make card to overflow out of container
    this.outerElement.style.paddingBottom = `calc(${this.element.length} * var(--card-gap))`;

    this.image.forEach((el, i) => {
      const view = new ViewTimeline({
        subject: this.element[i].firstElementChild,
      });

      el.firstElementChild.animate(
        [
          {
            scale: 0,
          },
          { scale: 1.2, offset: 0.1 },
          { scale: 0.9 },
        ],
        { easing: "linear", fill: "both", timeline: view }
      );
    });
  }
}

export const cardService = new CardService();
