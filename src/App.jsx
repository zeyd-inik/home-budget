//css
import '../src/styles/app.scss';

//components & Layouts & Pages
import MainLayout from './layouts/MainLayout';
import DashboardPage, { dashboardLoader } from './pages/DashboardPage';
import { mainLoader } from '../src/layouts/MainLayout';

//rrd
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
