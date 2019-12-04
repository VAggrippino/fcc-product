export function cssFallback(cdnUrl, localPath) {
  // Create a new link tag and append it to the document head
  const loadAlternate = () => {
    console.log(`Loading ${localPath}.`);
    const link = document.createElement(`link`);
    link.rel = `stylesheet`;
    link.href = localPath;
    document.querySelector(`head`).appendChild(link);
  }

  // Identify the CDN stylesheet
  const stylesheet = Array.from(document.styleSheets).filter((s) => s.href === cdnUrl)[0];

  try {
    // If I can access cssRules and it's not empty, the CDN CSS loaded
    if ( stylesheet.cssRules.length === 0 ) {
      console.log(`The cssRules for ${cdnUrl} is empty.`)
      loadAlternate();
    }
  } catch (e) {
    console.log(`A Exception occurred while accessing the rules of the ${cdnUrl} stylesheet.`);
    console.log(e);
    loadAlternate();
  }
}