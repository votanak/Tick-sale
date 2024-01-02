//no-prettier
import { loadEvents } from './loadEvents.js';

let events = document.getElementById('events');
loadEvents.forEach((el) => {
  const addEvent = document.createElement('div');
  addEvent.innerText = el.name;
  events.insertAdjacentElement('beforeend', addEvent);
});
