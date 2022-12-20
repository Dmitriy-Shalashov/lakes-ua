import Head from 'next/head';

// Components
import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout';


export default function Home() {
    
    
    return (
        <>
            <Head>
                <title>Lakes in Ukraine </title>
                <meta name='description' content='All lakes in Ukraine' />  
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>              
            </Head>
            <DefaultLayout >
                <p>connect to {process.env.NEXT_PUBLIC_KEY}</p>
            </DefaultLayout>

        </>
    ); 
}

 