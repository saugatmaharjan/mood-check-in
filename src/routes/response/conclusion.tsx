import { useMemo, useState } from 'react';
import useResponses from '../../store/response';
import { Response } from '../../types';
import { interpolate } from '../../utils';
import { MAX_WEIGHT, MIN_WEIGHT } from '../../data/questions';
import { conclusions } from '../../data/conclusion';

import Hat from '../../assets/hat.svg';
import useResponder from '../../store/responder';

const calculateWeight = (responses: Response[]) => {
  return responses.reduce((total, response) => {
    return (total += response.answer?.weight || 0);
  }, 0);
};

const Conclusion = () => {
  const { responses } = useResponses();
  const { sharedWithName, setSharedWithName } = useResponder();

  const [promptName, setPromptName] = useState(false);

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
        <div className="emoji">
          <img src={Hat} className="hat" />
          {conclusion.emoji}
        </div>
        <h1
          className="message"
          dangerouslySetInnerHTML={{ __html: conclusion.message }}
        />
        {!promptName && (
          <button className="shareBtn" onClick={() => setPromptName(true)}>
            Share with
          </button>
        )}
        {promptName && (
          <>
            <label className="label">
              Mentor's Name
              <br />
              <input
                name="sharedWith"
                value={sharedWithName}
                onChange={(e) => setSharedWithName(e.target.value)}
                placeholder="Mentor's name"
                className="nameInput"
              />
            </label>
            <br />
            <br />
            <button>Done</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Conclusion;
