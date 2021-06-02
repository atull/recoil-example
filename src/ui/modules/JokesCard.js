import { useEffect, Suspense } from 'react';
import { Card, Setup, Punchline } from '../components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { jokeAtom } from '../../recoil/atoms';
import { jokeSelector } from '../../recoil/selectors';

const Component = () => {
  const setJoke = useSetRecoilState(jokeAtom);
  const joke = useRecoilValue(jokeSelector);

  useEffect(() => {
    setJoke(joke);
  }, [joke]);

  return (
    <Card>
      <Setup />
      <Punchline />
    </Card>
  );
}

export const JokesCard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}
