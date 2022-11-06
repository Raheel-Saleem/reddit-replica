import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
import Verification from 'pages/authentication/Verification';
import PageNotFound from 'pages/extra-pages/PageNotFound';
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'verify',
            element: <Verification />
        }
    ]
};

export default LoginRoutes;
