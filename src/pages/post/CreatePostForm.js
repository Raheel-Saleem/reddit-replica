import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import AutoCompleteComuintiy from './AutoCompleteComuintiy';
import { openAlert } from 'store/reducers/alert';
import { SUCCESS, ERROR, INFO, WARNING } from 'utils/alertTypes';
import { createPost } from 'utils/apis';
// ================================|| REGISTER ||================================ //

const Form = () => {
    const user_id = useSelector((state) => state.auth.user_id);
    const dispatch = useDispatch();
    const [selectedComunity, setSelectedComunity] = useState(null);
    const validateCreatePost = async (values, resetForm) => {
        if (!selectedComunity) {
            dispatch(openAlert({ open: true, type: ERROR, msg: 'Please select community' }));
            return;
        }
        let payload = {};
        payload.user_id = user_id;
        payload.community_id = selectedComunity.community_id;
        payload = {
            ...payload,
            ...values
        };

        const response = await createPost(payload, dispatch);
        if (response) {
            resetForm({
                values: {
                    post_name: '',
                    description: ''
                }
            });
            setSelectedComunity(null);
        }
    };

    useEffect(() => {
        console.log('selectedComunity: ', selectedComunity);
    }, [selectedComunity]);
    return (
        <>
            <Formik
                initialValues={{
                    post_name: '',
                    description: ''
                }}
                validationSchema={Yup.object().shape({
                    post_name: Yup.string().max(255).required('Post title  is required'),
                    description: Yup.string().max(255).required('Description is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                    try {
                        // console.log('values: ', values);
                        validateCreatePost(values, resetForm);
                        setStatus({ success: true });
                        setSubmitting(true);
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
                                    <InputLabel htmlFor="firstname-signup">Select Community*</InputLabel>

                                    <AutoCompleteComuintiy
                                        user_id={user_id}
                                        dispatch={dispatch}
                                        selectedComunity={selectedComunity}
                                        setSelectedComunity={setSelectedComunity}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="post_name">Title*</InputLabel>
                                    <OutlinedInput
                                        id="post_name_id"
                                        type="post_name"
                                        value={values.post_name}
                                        name="post_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        error={Boolean(touched.post_name && errors.post_name)}
                                    />
                                    {touched.post_name && errors.post_name && (
                                        <FormHelperText error id="helper-text-post_name">
                                            {errors.post_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="description">Description*</InputLabel>
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
                                        Create Post
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

const CreatePostForm = () => (
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

export default CreatePostForm;
