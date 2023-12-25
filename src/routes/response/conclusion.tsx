import { useMemo } from 'react';
import useResponses from '../../store/response';
import { Response } from '../../types';
import { interpolate } from '../../utils';
import { MAX_WEIGHT, MIN_WEIGHT } from '../../data/questions';

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

  return (
    <div className="slide">
      <h1>
        Congratulations {totalWeight} {Math.floor(interpolatedWeight)}
      </h1>
    </div>
  );
};

export default Conclusion;
