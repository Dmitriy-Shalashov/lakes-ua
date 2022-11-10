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
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                
            </Head>
            <DefaultLayout >
                <p>connect to {process.env.NEXT_PUBLIC_KEY}</p>
            </DefaultLayout>

        </>
    ); 
}

 