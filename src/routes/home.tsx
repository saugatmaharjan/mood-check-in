import { Link } from 'react-router-dom';
import useResponder from '../store/responder';
import { useState } from 'react';

const Home = () => {
  const { name: responder, setName } = useResponder();
  const [promptName, setPromptName] = useState(false);

  return (
    <div className="home">
      <h1>Welcome to Wellness App</h1>
      <button onClick={() => setPromptName(true)}>Let's check you mood</button>
      <br />
      {promptName && (
        <>
          <label>
            Your Name
            <br />
            <input
              name="name"
              value={responder}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <Link
            to="/response"
            className={`link ${responder ? '' : 'disabled'}`}
          >
            Start
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
