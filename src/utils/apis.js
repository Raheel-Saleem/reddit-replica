import server from './server';
import { onLogin, setAuthenticate } from 'store/reducers/auth';
import { openAlert } from 'store/reducers/alert';
import { SUCCESS, ERROR, INFO, WARNING } from 'utils/alertTypes';
import { startLoading, stopLoading } from 'store/reducers/loader';
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
export async function createComunity(payload, dispatch) {
    try {
        const result = await server.post('add_community', payload);
        console.log('result: ', result);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'Community has been added') {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Community has been added successfully' }));
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: result.data.msg }));
        }
        return true;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getAllCommunities(dispatch) {
    try {
        const result = await server.get('all_communities');
        return result?.data;
    } catch (error) {
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function subscribeComunity(payload, dispatch) {
    try {
        dispatch(startLoading());
        const result = await server.post('subscribe-community', payload);
        console.log('result: ', result);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'Community Added') {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Community has been subscribed successfully' }));
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: result.data.msg }));
        }
        return true;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getSubscribedComunities(user_id, dispatch) {
    try {
        dispatch(startLoading());
        const result = await server.get(
            `all_communities/${user_id}`
            //  { params: { user_id } }
        );
        console.log('result: ', result);
        dispatch(stopLoading());
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getSubscribedComunityForAutocomplete(user_id, dispatch) {
    try {
        const result = await server.post('subscribed-community', user_id);
        console.log('result: ', result);
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function createPost(payload, dispatch) {
    try {
        dispatch(startLoading());
        const result = await server.post('create_post', payload);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'post has been created') {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Post has been created successfully' }));
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: result.data.msg }));
        }
        return true;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getAllPost(payload, dispatch) {
    try {
        console.log('payload: ', payload);
        const result = await server.post('all_posts', payload);
        console.log('result: ', result);
        dispatch(stopLoading());
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function savePost(payload, dispatch) {
    try {
        dispatch(startLoading());
        console.log('payload: ', payload);
        const result = await server.post('save_post', payload);
        dispatch(stopLoading());
        if (result.status == 200 && result.data.msg == 'You saved this post') {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'You saved this post' }));
        } else {
            dispatch(openAlert({ open: true, type: ERROR, msg: 'Post already in saved list' }));
        }
        return true;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getAllSavedPost(payload, dispatch) {
    try {
        const result = await server.post('all_saved_posts', payload);
        console.log('result: ', result);
        dispatch(stopLoading());
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.error }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function createComment(payload, dispatch) {
    try {
        dispatch(startLoading());
        const result = await server.post('new_comment', payload);
        dispatch(stopLoading());
        if (result.status == 200) {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'Comment Added' }));
        }
        return true;
    } catch (error) {
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function getAllComment(payload) {
    try {
        const result = await server.post('all_comments', payload);

        // dispatch(stopLoading());
        return result?.data;
    } catch (error) {
        // console.log('error: ', error);
        // dispatch(stopLoading());
        // error
        //     ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
        //     : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}

export async function likePost(payload, dispatch) {
    try {
        dispatch(startLoading());
        const result = await server.post('like_post', payload);
        console.log('result: ', result);
        dispatch(stopLoading());
        if (result.status == 200) {
            dispatch(openAlert({ open: true, type: SUCCESS, msg: 'You liked this post' }));
        }
        return result?.data.total_likes;
    } catch (error) {
        console.log('error: ', error);
        dispatch(stopLoading());
        error
            ? dispatch(openAlert({ open: true, type: ERROR, msg: error.response.data.msg }))
            : dispatch(openAlert({ open: true, type: ERROR, msg: 'Internal Error' }));
        return false;
    }
}
