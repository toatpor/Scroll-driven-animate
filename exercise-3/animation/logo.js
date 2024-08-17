class AnimateLogo {
  _logo = document.getElementById("logo");

  async animate() {
    const logoAnimate = this._logo.animate(
      [
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
        },
      ],
      {
        duration: 3000,
        easing: "ease-in-out",
      }
    );

    await logoAnimate.finished;
    this._logo.classList.remove("animate");
  }
}

export const animateLogo = new AnimateLogo();
