//css
import './dashboardPage.scss';

// components
import Intro from '../components/Intro/Intro';

/* rrd */
import { useLoaderData } from 'react-router-dom';

//utilities
import { fetchData } from '../utility';

//libraries
import { toast } from 'react-toastify';

/* action */
export const dashboardAction = async ({ request }) => {
  const data = request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  //new user action
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(`Welcome ${userName}`);
    } catch (error) {
      throw new error('There was a problem creating your account');
    }
  }
};
/* Loader */
export const dashboardLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

function DashboardPage() {
  const { userName } = useLoaderData();
  return <div>{userName ? 'something' : <Intro />} </div>;
}

export default DashboardPage;
