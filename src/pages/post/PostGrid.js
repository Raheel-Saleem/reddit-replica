import React from 'react';
import PostCard from './PostCard';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

const PostGrid = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    {[1, 2, 3, 4, 5].map((post, index) => (
                        <PostCard />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default PostGrid;
