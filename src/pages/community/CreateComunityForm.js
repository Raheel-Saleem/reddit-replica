import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import MainCard from 'components/MainCard';
import AnimateButton from '../../components/@extended/AnimateButton';
import { useSelector, useDispatch } from 'react-redux';
import { createComunity } from 'utils/apis';
import { startLoading } from 'store/reducers/loader';
// ================================|| REGISTER ||================================ //

const Form = () => {
    const userId = useSelector((state) => state.auth.user_id);
    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={{
                    user_id: userId,
                    community_name: '',
                    description: ''
                }}
                validationSchema={Yup.object().shape({
                    user_id: Yup.string().max(255).required('UserId is required'),
                    community_name: Yup.string().max(255).required('Community name is required'),
                    description: Yup.string().max(255).required('Description is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                    try {
                        dispatch(startLoading());
                        createComunity(values, dispatch);
                        setStatus({ success: true });
                        setSubmitting(true);
                        resetForm({
                            values: {
                                user_id: userId,
                                community_name: '',
                                description: ''
                            }
                        });
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstname-signup">Community Name*</InputLabel>
                                    <OutlinedInput
                                        id="community_name"
                                        type="text"
                                        value={values.community_name}
                                        name="community_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder=""
                                        fullWidth
                                        error={Boolean(touched.community_name && errors.community_name)}
                                    />
                                    {touched.firstname && errors.firstname && (
                                        <FormHelperText error id="helper-text-community_name">
                                            {errors.community_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Description*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.description && errors.description)}
                                        id="description"
                                        multiline
                                        rows={4}
                                        value={values.description}
                                        name="description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Describe about community...."
                                        inputProps={{}}
                                    />
                                    {touched.description && errors.description && (
                                        <FormHelperText error id="helper-text-description-signup">
                                            {errors.description}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create Community
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

const CreateComunityForm = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 250px)' } }}
            >
                <Grid item>
                    <MainCard
                        sx={{
                            maxWidth: { xs: 400, lg: 600 },
                            margin: { xs: 2.5, md: 3 },
                            '& > *': {
                                flexGrow: 1,
                                flexBasis: '50%'
                            }
                        }}
                        content={false}
                        border={false}
                        boxShadow
                        shadow={(theme) => theme.customShadows.z1}
                    >
                        <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                            <Grid item xs={12}>
                                <Form />
                            </Grid>
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default CreateComunityForm;
