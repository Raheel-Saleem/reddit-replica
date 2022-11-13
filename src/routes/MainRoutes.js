import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
import ComunityGrid from 'pages/community/ComunityGrid';
// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));

import CreateComunityForm from 'pages/community/CreateComunityForm';
import PostGrid from 'pages/post/PostGrid';
import CreatePostForm from 'pages/post/CreatePostForm';
const SubscribedCommunites = Loadable(lazy(() => import('./../pages/community/SubscribedCommunites')));
import Comment from 'pages/comments/Comment';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ComunityGrid />
        },

        {
            path: 'communities',
            element: <ComunityGrid />
        },
        {
            path: 'createcommunity',
            element: <CreateComunityForm />
        },
        {
            path: 'post-card',
            element: <PostGrid />
        },
        {
            path: 'saved-post',
            element: <PostGrid />
        },
        {
            path: 'createpost',
            element: <CreatePostForm />
        },
        {
            path: 'subscribed-comunities',
            element: <SubscribedCommunites />
        },
        {
            path: 'comments',
            element: <Comment />
        }
    ]
};

export default MainRoutes;
