function pageRandomizer(pages) {
  if (pages > 2) {
    pages = pages - 1;
    let page = (Math.floor(Math.random() * pages) + 1);
    return page;
  } else {
    page = 1;
    return page;
  }
}

module.exports pageRandomizer;