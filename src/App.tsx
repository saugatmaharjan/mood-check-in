import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/home';
import ResponseCollector from './routes/response';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/response',
    element: <ResponseCollector />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
