import Head from 'next/head';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Lakes in UA - 404 </title>
                <meta name='description' content='Content for this page' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-error-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-error-16x16.png"/>               
            </Head>
            <div>404</div> 
        </>
    );
       
        
};

export default Custom404;