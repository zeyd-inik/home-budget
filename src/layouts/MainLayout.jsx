//css
import './mainLayout.scss';
//components
import Navbar from '../components/navbar/Navbar';

//rrd
import { Outlet, useLoaderData } from 'react-router-dom';
//assets
import wave from '../assets/wave.svg';
//utility
import { fetchData } from '../utility';
//loader
export const mainLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};
function MainLayout() {
  return (
    <div className="mainLayout">
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <div className="wave-container">
        <img
          className="wave-img"
          src={wave}
          alt="wave-image"
        />
      </div>
    </div>
  );
}

export default MainLayout;
