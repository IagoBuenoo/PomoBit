import completedTaskAudio from '../assets/audios/completedTaskAudio.m4a';

export function loadAudio() {
  const audio = new Audio(completedTaskAudio);

  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
