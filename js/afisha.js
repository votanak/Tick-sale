import loadEvents from './loadEvents';

let events = document.getElementById('events');
loadEvents.forEach((el) => {
  const addEvent = document.createElement('div');
  addEvent.innerText = el.name;
  events.insertAdjacentElement('beforeend', addEvent);
});
