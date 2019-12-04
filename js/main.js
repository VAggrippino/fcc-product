import { cssFallback } from './cssFallback.js';

window.addEventListener(`load`, () => {
  const selector_buttons = document.querySelectorAll(`.product--images--selectors button`);

  selector_buttons.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      const display_picture = document.querySelector(`.product--images--display picture`);
      const display_source1 = document.querySelector(`.product--images--display source:first-of-type`);
      const display_source2 = document.querySelector(`.product--images--display source:nth-of-type(2)`);
      const display_image = document.querySelector(`.product--images--display img`);
      const display_link = document.querySelector(`.product--images--display a`);

      const target_picture = (e.target.tagName === `IMG`) ? e.target.parentNode : e.target.firstChild;
      const target_source1 = target_picture.querySelector(`source:first-child`);
      const target_source2 = target_picture.querySelector(`source:nth-child(2)`);
      const target_image = target_picture.querySelector(`img`);

      display_source1.srcset = target_source1.dataset.fullsize;
      display_source2.srcset = target_source2.dataset.fullsize;
      display_image.src = target_image.src;
      display_image.dataset.zoom = target_image.dataset.fullsize;
      display_image.alt = target_image.alt;
      display_link.href = target_image.src;
    });
  });

  const fontawesome_cdn = document.getElementById(`fontawesome-cdn`);
  cssFallback(fontawesome_cdn.href, `css/all.min.css`);

  new Drift(document.querySelector(`.product--images--display img`), {
    paneContainer: document.querySelector(`.product--images--zoom`),
    hoverBoundingBox: true,
  });
});