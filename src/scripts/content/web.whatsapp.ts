function whatsapp() {
  const sideview = Array.from(
    document.querySelectorAll<HTMLSpanElement>('#pane-side div'),
  );
  const messageIn = Array.from(
    document.querySelectorAll<HTMLSpanElement>('.message-in span'),
  );
  const messageOut = Array.from(
    document.querySelectorAll<HTMLSpanElement>('.message-out span'),
  );
  const elements = sideview.concat(messageIn).concat(messageOut);

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

setInterval(whatsapp, TIME_TO_UPDATE);
