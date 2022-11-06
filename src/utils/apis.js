import server from './server';
import { onLogin, setAuthenticate } from 'store/reducers/auth';
import { openAlert } from 'store/reducers/alert';
import { SUCCESS, ERROR, INFO, WARNING } from 'utils/alertTypes';
import { stopLoading } from 'store/reducers/loader';
export async function doSignUp(payload, dispatch, navigate) {
    try {
        const result = await server.post('signup', payload);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'signed up success') {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'User Added Successfully Please Login to Verify' }));
            navigate('/');
        }
        return true;
    } catch (error) {
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function doLogin(payload, dispatch, navigate) {
    try {
        const result = await server.post('login', payload);
        dispatch(stopLoading());
        if (result.status == 200) {
            const { email, is_authenticated: isAuthenticated, user_id, username } = result.data;
            if (!isAuthenticated) {
                dispatch(onLogin({ email, isAuthenticated, user_id, username, isLoggedIn: false }));
                dispatch(openAlert({ open: true, type: INFO, msg: 'Please Verify your Account First' }));
                navigate('/verify');
            } else {
                dispatch(onLogin({ email, isAuthenticated, user_id, username, isLoggedIn: true }));
                dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Authenticated Successfully' }));
                navigate('/');
            }
        }
        return true;
    } catch (error) {
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));

        return false;
    }
}
export async function authVerification(payload, dispatch, navigate) {
    try {
        const result = await server.post('verify_code', payload);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'Auth Success') {
            dispatch(setAuthenticate());
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Authenticated Successfully' }));
            navigate('/');
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: result.data.msg }));
        }
        return true;
    } catch (error) {
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}
