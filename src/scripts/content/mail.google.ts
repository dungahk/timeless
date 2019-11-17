Array.from(document.querySelectorAll('td > span > span'));

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

    if (
      e.innerText.search(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/) < 0
    ) {
      return;
    }

    e.remove();
  });
}

setInterval(gmail, TIME_TO_UPDATE);
