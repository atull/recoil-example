import { atom } from 'recoil';

export const jokeAtom = atom({
  key: 'JOKE_ATOM',
  default: {
    setup: 'setup fetch..',
    punchline: 'punchline fetch..'
  }
});
