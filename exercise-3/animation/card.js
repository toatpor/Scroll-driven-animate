class Card {
  subject = document.querySelector(".features");
  cards = document.querySelectorAll(".cardFeature");
  _countCard;
  _viewTimeline;
  constructor() {
    this._countCard = this.cards.length;
    this._viewTimeline = this.generateTimeline();
  }

  generateTimeline() {
    // need to make sure parent element
    // when create viewTimeline work only descendant element
    return new ViewTimeline({
      subject: this.subject,
      axis: "block",
    });
  }

  animate() {
  
    this.cards.forEach((el, i) => {
      el.animate(
        [
          {
            //   we need to move element to outside of scope
            //   make it far need to increase more 100%
            //   need to deduct padding left right and gap
            //   rotate need to stay the last will effect axis
            //   translate3d x-axis y-axis z-axis
            transform: ` translate3d(calc(-100% * ${this._countCard + this._countCard - i}  - ${i - 1} * 40px - 60px), 0 ,calc(300px * (${
              this._countCard - i
            }))) rotateY(calc(45deg + 60deg * ${i / this._countCard}))`,
          },
          { transform: "translate3d(0, 0 ,0) rotateY(0deg)  " },
        ],
        { fill: "both", timeline: this._viewTimeline, rangeStart: "cover 20%", rangeEnd: "cover 50%" }
      );
    });
  }
}

export const card = new Card();
