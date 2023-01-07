import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('iframe');

const player = new Player(vimeoPlayer);

player.on('play', function () {
  console.log('played the video!');
});
