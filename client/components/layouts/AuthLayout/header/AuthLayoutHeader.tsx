import { FC } from 'react';
import { useRouter } from 'next/router';
import { BsGlobe2 } from 'react-icons/bs';
import styles from './AuthLayoutHeader.module.scss';

import Button from '@/components/commonBlocks/button/Button';
import { ButtonSize, ButtonStyle} from '@/components/commonBlocks/button/Button.interface';
import {loginHeaderConfigs} from './AuthHeaderConfig';

const LoginLayoutHeader:FC = () => {
    const router = useRouter();
   
    const {btnTitle, btnClick} = loginHeaderConfigs({router});

    return (
        <div  className={styles.header}>

            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <h1>Logo All lakes in UA</h1> 
                </div>
                <div className={styles.navigate}>
                    <h3>EN</h3>
                    <div className={styles.language} >
                        <h2 className={styles.icon}><BsGlobe2/></h2> 
                    </div>
                    <div className={styles.btn}>
                        <Button 
                            buttonStyle={ButtonStyle.outline}
                            buttonSize={ButtonSize.L}
                            onClick={btnClick}
                        >
                            {btnTitle}
                        </Button>   
                    </div>          
                   
                </div>
            </div>  

        </div>
    );
};

export default LoginLayoutHeader;