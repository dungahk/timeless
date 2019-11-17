function gmail() {
  const inbox = Array.from(
    document.querySelectorAll<HTMLSpanElement>('td > span > span'),
  );
  const mailView = Array.from(
    document.querySelectorAll<HTMLSpanElement>('td td > div > span'),
  );
  const elements = inbox.concat(mailView);

  elements.forEach(e => {
    if (e.children.length) {
      return;
    }

    if (!e.innerText) {
      return;
    }

    if (e.innerText.search(TIME_REGEX) < 0) {
      return;
    }

    e.remove();
  });
}

setInterval(gmail, TIME_TO_UPDATE);
