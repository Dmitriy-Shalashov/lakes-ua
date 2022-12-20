import Head from 'next/head';

import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';
import LoginForm from '@/components/forms/LoginForm/LoginForm';

const Login = () => {
    return (
        <>
            <Head>
                <title>Lakes in UA - Login </title>
                <meta name='description' content='Content for this page' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-login-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-login-16x16.png"/>               
            </Head>
            <AuthLayout>
                <LoginForm/>
            </AuthLayout>
        </>
    );
};

export default Login;