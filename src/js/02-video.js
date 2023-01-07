import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('iframe');

const player = new Player(vimeoPlayer);

localStorage.getItem('videoplayer-current-time')
  ? player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  : 0;

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(
      'current time seconds:',
      localStorage.getItem('videoplayer-current-time')
    );
  }, 1000)
);
