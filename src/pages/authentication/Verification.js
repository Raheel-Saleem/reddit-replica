import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import AuthVerification from './auth-forms/AuthVerification';
// ================================|| LOGIN ||================================ //

const Verification = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Please Verify Your Account</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthVerification />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Verification;
