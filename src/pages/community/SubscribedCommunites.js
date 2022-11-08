import { useEffect, useState } from 'react';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import CommunityCard from './ComunityCard';
import { getSubscribedComunities } from 'utils/apis';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, stopLoading } from 'store/reducers/loader';
import NoDataFound from 'pages/extra-pages/NoDataFound';
const SubscribedCommunites = () => {
    const [comunities, setComunities] = useState([]);
    const user_id = useSelector((state) => state.auth.user_id);

    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            const result = await getSubscribedComunities(user_id, dispatch);
            result && setComunities(result);
            dispatch(stopLoading());
        })();
    }, [user_id, dispatch]);
    return (
        <>
            {comunities.length == 0 ? (
                <NoDataFound type={'communities'} link={'/createcommunity'} desc="Click here to create one" />
            ) : (
                <Container>
                    <Grid container spacing={3}>
                        {comunities.map((comunity, index) => (
                            <CommunityCard key={index} comunity={comunity} />
                        ))}
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default SubscribedCommunites;
