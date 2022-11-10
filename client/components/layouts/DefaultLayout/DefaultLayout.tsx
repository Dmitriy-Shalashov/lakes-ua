
// Components
import Header from '@/components/parts/Header/Header';
import Footer from '@/components/parts/Footer/Footer';


const DefaultLayout = ({children}) => {

    return (
        <>
            
            <Header/>
            {children}
            <Footer/>
        </>
        
    );
};

export default DefaultLayout;