import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import PageNotFound from 'pages/extra-pages/PageNotFound';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return useRoutes([isLoggedIn ? MainRoutes : LoginRoutes, { path: '*', element: <PageNotFound /> }]);
}
