import { useMemo } from 'react';
import useResponses from '../../store/response';
import { Response } from '../../types';
import { interpolate } from '../../utils';
import { MAX_WEIGHT, MIN_WEIGHT } from '../../data/questions';
import { conclusions } from '../../data/conclusion';

const calculateWeight = (responses: Response[]) => {
  return responses.reduce((total, response) => {
    return (total += response.answer?.weight || 0);
  }, 0);
};

const Conclusion = () => {
  const { responses } = useResponses();

  const totalWeight = useMemo(
    () => calculateWeight(Object.values(responses)),
    [responses],
  );

  const interpolatedWeight = interpolate(
    totalWeight,
    [MIN_WEIGHT, MAX_WEIGHT],
    [1, 5],
  );

  const conclusion = useMemo(() => {
    return conclusions[Math.floor(interpolatedWeight)];
  }, [interpolatedWeight]);

  return (
    <div className="slide conclusion">
      <div className="slideContent">
        <div className="emoji">{conclusion.emoji}</div>
        <h1
          className="message"
          dangerouslySetInnerHTML={{ __html: conclusion.message }}
        />
      </div>
    </div>
  );
};

export default Conclusion;
