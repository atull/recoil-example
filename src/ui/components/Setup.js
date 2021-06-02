import './index.css';
import { useRecoilValue } from 'recoil';
import { jokeAtom } from '../../recoil/atoms';

export const Setup = () => {
  const joke = useRecoilValue(jokeAtom);

  return (
    <div className="setup">
      <p>{joke.setup}</p>
    </div>
  )
}
