import { Link } from 'react-router-dom';
import useResponder from '../store/responder';
import { useState } from 'react';

import Logo from '../assets/logo.png';

const Home = () => {
  const { name: responder, setName } = useResponder();
  const [promptName, setPromptName] = useState(false);

  return (
    <section className="hero">
      <div className="heroContent">
        {!promptName && (
          <>
            <img src={Logo} className="logo" />
            <h4 className="hey">Hey, Welcome to</h4>
            <h1 className="title">Mood Check In</h1>
            <p className="subTitle">
              Thriving Today: Your Personal Well-Being Dashboard – Empowering
              Your Journey to a Healthier, Happier You!
            </p>
            <button className="primary" onClick={() => setPromptName(true)}>
              Get started
            </button>
          </>
        )}
        {promptName && (
          <>
            <label className="label">
              Your Name
              <br />
              <input
                name="name"
                value={responder}
                onChange={(e) => setName(e.target.value)}
                placeholder="Anonymous"
                className="nameInput"
              />
            </label>
            <br />
            <Link
              to="/response"
              className={`start ${responder ? '' : 'disabled'}`}
            >
              Start
            </Link>
          </>
        )}
      </div>
    </section>
  );

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
