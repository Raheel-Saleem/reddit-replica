import server from './server';

export async function doSignUp(payload) {
    try {
        const result = await server.post('signup', payload);
        console.log('result: ', result);
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
    }
}

export async function doLogin(payload) {
    try {
        const result = await server.post('login', payload);
        console.log('result: ', result);
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
    }
}
export async function authVerification(payload) {
    try {
        const result = await server.post('verify_code', payload);
        console.log('result: ', result);
        return result?.data;
    } catch (error) {
        console.log('error: ', error);
    }
}
