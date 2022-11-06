import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
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
import { useSelector, useDispatch } from 'react-redux';
// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { authVerification } from 'utils/apis';
// ============================|| FIREBASE - LOGIN ||============================ //

const AuthVerification = () => {
    const email = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    email: email,
                    code: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    code: Yup.string().max(255).required('Code is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: true });
                        setSubmitting(true);
                        await authVerification(values, dispatch, nevigate);
                    } catch (err) {
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
                                    <InputLabel htmlFor="email-verification">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-verification"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Code</InputLabel>
                                    <OutlinedInput
                                        id="code"
                                        type="text"
                                        value={values.code}
                                        name="code"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter verification code"
                                        fullWidth
                                        error={Boolean(touched.code && errors.code)}
                                    />
                                    {touched.code && errors.code && (
                                        <FormHelperText error id="standard-weight-helper-text-code">
                                            {errors.code}
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
                                        Verify
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

export default AuthVerification;
