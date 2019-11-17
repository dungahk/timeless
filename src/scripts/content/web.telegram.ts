function telegram() {
  const sideView = Array.from(document.querySelectorAll('.im_dialog_date'));
  const messages = Array.from(
    document.querySelectorAll('.im_message_date_text'),
  );

  const elements = sideView.concat(messages);
  elements.forEach(e => e.remove());
}

setInterval(telegram, TIME_TO_UPDATE);
