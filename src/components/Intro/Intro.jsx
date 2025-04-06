/* css */
import './intro.scss';
//rrd
import { Form } from 'react-router-dom';
//libraries
import { UserPlusIcon } from '@heroicons/react/24/solid';
// assets
import illustration from '../../assets/illustration.jpg';

function Intro() {
  return (
    <div className="intro">
      <h1 className="title">
        Take Control of <span>Your Money</span>
      </h1>
      <div className="desc">
        Personal budgeting is the secret to financial freedom. Start your
        journey today.
      </div>
      <Form
        method="post"
        className="form"
      >
        <input
          type="text"
          className="text"
          placeholder="What is your name?"
          name="userName"
          required
          autoComplete="given-name"
          aria-label="Your name"
        />
        <button type="submit">
          Create Account <UserPlusIcon width={20} />
        </button>
        <input
          type="hidden"
          name="_action"
          value="newUser"
        />
      </Form>
      <img
        src={illustration}
        alt="Person with money"
        width={600}
      />
    </div>
  );
}

export default Intro;
