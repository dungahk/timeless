function googleCalendar() {
  const elements = document.querySelectorAll(
    'div[role="gridcell"] > div[aria-hidden="true"]',
  );
  elements.forEach(e => e.remove());
}

setInterval(googleCalendar, TIME_TO_UPDATE);
