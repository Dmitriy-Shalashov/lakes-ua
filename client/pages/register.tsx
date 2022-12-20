import Head from 'next/head';

import LoginLayout from '@/components/layouts/AuthLayout/AuthLayout';
import RegisterForm from '@/components/forms/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <>
            <Head>
                <title>Lakes in UA - Register </title>
                <meta name='description' content='Content for this page' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-login-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-login-16x16.png"/>               
            </Head>
            <LoginLayout>
                <RegisterForm/>
            </LoginLayout>
        </>
    );
       
        
};

export default Register;