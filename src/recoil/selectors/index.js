import { selector } from 'recoil';

export const jokeSelector = selector({
  key: 'fetchJoke',
  get: async () => {
    try {
      const resp = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const jokeObj = await resp.json();
      return jokeObj;
    } catch (e) {

    }
  }
});
