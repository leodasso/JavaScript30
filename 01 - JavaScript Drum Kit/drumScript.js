// get a list of all the key elements
const keys = document.querySelectorAll('.key');

// Events
// add an event listener for when any key transition is complete
keys.forEach(key => key.addEventListener('transitionend', returnToNormal));

// add an event listener for any time a keyboard key is pressed
window.addEventListener('keydown', playKey);



function returnToNormal(eventInfo) {

  // this is just to make sure we're only using 1 event per key
  if (eventInfo.propertyName != 'transform') return;

  this.classList.remove('playing');
}



function playKey(eventInfo)
{

  // find the audio element related to the given event
  // here is the needlessly complicated way of doing it:`[data-key="${eventInfo.keyCode}"]`;
  const selectorString = '[data-key="' + eventInfo.keyCode + '"]';

  const audio = document.querySelector('audio' + selectorString);
  const key = document.querySelector('.key' + selectorString);

  // If the given event has no audio, just exit the function.
  if (!audio) return;

  // rewind and play the audio
  audio.currentTime = 0;
  audio.play();

  // change the appearance of the key by changing its class
  key.classList.add('playing');
}
