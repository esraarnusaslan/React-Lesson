import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/00-home/index.jsx';
import HelloWorld from '../components/01-hello-world/MyApp.jsx';
import ControlMeu from '../components/02-jsx/Jsx4Map.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/hello-world',
        element: <HelloWorld />,
    },
    {
        path: '/jsx',
        element: <ControlMeu />,
    },
]);

const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppRouterProvider;
