window.addEventListener(`load`, () => {
  const selector_buttons = document.querySelectorAll(`.product--images--selectors button`);
  selector_buttons.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      const display_image = document.querySelector(`.product--images--display img`);
      let url;
      let alt;
      if ( e.target.tagName === `IMG` ) {
        url = e.target.getAttribute(`src`);
        alt = e.target.getAttribute(`alt`);
      } else if ( e.target.tagName === `BUTTON` ) {
        url = e.target.childNodes[0].getAttribute(`src`);
        alt = e.target.childNodes[0].getAttribute(`alt`);
      }

      display_image.setAttribute(`src`, url);
      display_image.setAttribute(`alt`, alt);
    });
  });
});