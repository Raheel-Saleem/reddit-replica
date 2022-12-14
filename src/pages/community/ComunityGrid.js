import { useEffect, useState } from 'react';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import CommunityCard from './ComunityCard';
import { getAllCommunities } from 'utils/apis';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from 'store/reducers/loader';
import NoDataFound from 'pages/extra-pages/NoDataFound';
const ComunityGrid = () => {
    const [comunities, setComunities] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            dispatch(startLoading());
            const result = await getAllCommunities(dispatch);
            console.log('result: ', result);
            result && setComunities(result);
            dispatch(stopLoading());
        })();
    }, [dispatch]);
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

export default ComunityGrid;

const POST_TITLES = [
    'Whiteboard Templates By Industry Leaders',
    'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
    'Designify Agency Landing Page Design',
    '✨What is Done is Done ✨',
    'Fresh Prince',
    'Six Socks Studio',
    'vincenzo de cotiis’ crossing over showcases a research on contamination',
    'Simple, Great Looking Animations in Your Project | Video Tutorial',
    '40 Free Serif Fonts for Digital Designers',
    'Examining the Evolution of the Typical Web Design Client',
    'Katie Griffin loves making that homey art',
    'The American Dream retold through mid-century railroad graphics',
    'Illustration System Design',
    'CarZio-Delivery Driver App SignIn/SignUp',
    'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
    'Tylko Organise effortlessly -3D & Motion Design',
    'RAYO ?? A expanded visual arts festival identity',
    'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
    'Inside the Mind of Samuel Day',
    'Portfolio Review: Is This Portfolio Too Creative?',
    'Akkers van Margraten',
    'Gradient Ticket icon',
    'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
    'How to Animate a SVG with border-image'
];
