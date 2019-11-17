function slack() {
  const elements = document.querySelectorAll('.c-timestamp');
  elements.forEach(e => e.remove());
}

setInterval(slack, TIME_TO_UPDATE);
