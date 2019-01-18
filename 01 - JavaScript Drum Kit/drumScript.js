window.addEventListener('keydown', function(e) {
  playSound(e);
});

function playSound(eventInfo)
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
