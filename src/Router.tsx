import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Mainpage from './pages/Mainpage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Mainpage />,
      },
    ],
  },
]);

export default Router;
