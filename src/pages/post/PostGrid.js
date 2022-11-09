import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from 'utils/apis';
import { startLoading, stopLoading } from 'store/reducers/loader';
import NoDataFound from 'pages/extra-pages/NoDataFound';

const PostGrid = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user_id);

    useEffect(() => {
        (async function () {
            dispatch(startLoading());
            const result = await getAllPost({ user_id: userId }, dispatch);
            console.log('result: ', result);
            result && setPosts(result);
            dispatch(stopLoading());
        })();
    }, []);
    return (
        <>
            {posts.length == 0 ? (
                <NoDataFound type={'posts'} link={'/createpost'} desc="Click here to create one" />
            ) : (
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            {[1, 2, 3, 4, 5].map((post, index) => (
                                <PostCard />
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default PostGrid;
