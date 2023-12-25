import { useRef, useState } from 'react';
import useResponses from '../../store/response';
import Conclusion from './conclusion';

const ResponseCollector = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const { responses, setAnswer } = useResponses();
  const sliderRef = useRef<HTMLDivElement>(null);

  const next = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: 1000, top: 0, behavior: 'smooth' });
      setActiveSlide((prev) =>
        prev > Object.keys(responses).length ? prev : prev + 1,
      );
    }
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: -1000, top: 0, behavior: 'smooth' });
      setActiveSlide((prev) => (prev <= 1 ? prev : prev - 1));
    }
  };
  console.log(activeSlide);
  return (
    <main>
      <button onClick={prev} className="prev">
        Previous
      </button>
      <div className="slider" ref={sliderRef}>
        {Object.values(responses).map((response) => (
          <div className="slide" key={response.question.id}>
            <div className="slideContent">
              <h1 className="question">{response.question.label}</h1>
              {response.question.options.map((option) => (
                <label
                  onClick={(e) => {
                    e.stopPropagation();
                    setAnswer(response.question.id, option);
                    setTimeout(() => next(e), 500);
                  }}
                  className="option"
                >
                  <input
                    type="radio"
                    value={option.weight}
                    name={response.question.label}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
        <Conclusion />
      </div>
      <button onClick={next} className="next">
        Next
      </button>
    </main>
  );
};

export default ResponseCollector;
