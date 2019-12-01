import { getImageProperties } from './getImageProperties.js';

window.addEventListener(`load`, () => {
  const selector_buttons = document.querySelectorAll(`.product--images--selectors button`);

  selector_buttons.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      const display_image = document.querySelector(`.product--images--display img`);
      const display_link = document.querySelector(`.product--images--display a`);
      const target_image = (e.target.tagName === `IMG`) ? e.target : e.target.firstChild;
      const { src, alt } = getImageProperties( target_image );

      display_link.setAttribute(`href`, src);
      display_image.setAttribute(`src`, src);
      display_image.setAttribute(`data-zoom`, src);
      display_image.setAttribute(`alt`, alt);
    });
  });

  new Drift(document.querySelector(`.product--images--display img`), {
    paneContainer: document.querySelector(`.product--images--zoom`),
    hoverBoundingBox: true,
  });
});