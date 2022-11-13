import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getAllSavedPost } from 'utils/apis';
import { startLoading, stopLoading } from 'store/reducers/loader';
import NoDataFound from 'pages/extra-pages/NoDataFound';
import { useLocation } from 'react-router-dom';

const PostGrid = () => {
    const [posts, setPosts] = useState([]);

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user_id);
    let location = useLocation();

    useEffect(() => {
        if (location.pathname == '/post-card') {
            console.log(' if: executed');
            (async function () {
                dispatch(startLoading());
                const result = await getAllPost({ user_id: userId }, dispatch);
                console.log('result: ', result);
                result && setPosts(result);
                dispatch(stopLoading());
            })();
        } else if ('/saved-post') {
            console.log('else if: executed');
            (async function () {
                dispatch(startLoading());
                const result = await getAllSavedPost({ user_id: userId }, dispatch);
                console.log('result: ', result);
                result && setPosts(result);
                dispatch(stopLoading());
            })();
        }
    }, [location.pathname, dispatch, userId]);

    useEffect(() => {
        console.log('location: ', location);
    }, [location]);
    return (
        <>
            {posts.length == 0 ? (
                <NoDataFound type={'posts'} link={'/createpost'} desc="Click here to create one" />
            ) : (
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            {posts.map((post, index) => (
                                <PostCard post={post} userId={userId} dispatch={dispatch} />
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default PostGrid;
