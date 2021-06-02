import './index.css';
import { useRecoilValue } from 'recoil';
import { jokeAtom } from '../../recoil/atoms';

export const Punchline = ({ msg }) => {
  const joke = useRecoilValue(jokeAtom);

  return (
    <div className="punchline">
      <p>{joke.punchline}</p>
    </div>
  )
}
