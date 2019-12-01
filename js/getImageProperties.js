export function getImageProperties(image) {
  return {
    src: image.getAttribute(`src`),
    alt: image.getAttribute(`alt`),
  }
}