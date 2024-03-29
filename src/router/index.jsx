import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/00-home/index.jsx';
import HelloWorld from '../components/01-hello-world/MyApp.jsx';
import ControlMeu from '../components/02-jsx/Jsx4Map.jsx';
import Clock3 from '../components/19-clock-3/Clock3.jsx';
import AppLayout from '../layout/index.jsx';
import Countries from '../components/23-axios/Countries.jsx';
import Movies from '../components/26-router/Movies.jsx';
import MovieDetail from '../components/26-router/MovieDetail.jsx';
import Exchange from '../components/27-context-api/exchange.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'hello-world',
                element: <HelloWorld />,
            },
            {
                path: 'control-menu',
                element: <ControlMeu />,
            },

            {
                path: 'clock',
                element: <Clock3 />,
            },
            {
                path: 'countries',
                element: <Countries />,
            },
            {
                path: 'movies',
                children: [
                    {
                        index: 'true',
                        element: <Movies />,
                    },
                    {
                        path: ':movieId',
                        element: <MovieDetail />,
                    },
                ],
            },
            {
                path: 'exchange',
                element: <Exchange />,
            },
        ],
    },
]);

const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppRouterProvider;
