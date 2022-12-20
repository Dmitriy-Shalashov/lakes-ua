import { FC } from 'react';
import Image from 'next/image';
import image from '../../../public/images/carp-2.jpg';
import {SubmitHandler, useForm} from 'react-hook-form';

import styles from './AuthLayout.module.scss';

import LoginLayoutHeader from './header/AuthLayoutHeader';
import { ILoginFields, ILoginLayout } from './AuthLayout.interface';

const LoginLayout: FC<ILoginLayout> = ({children}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<ILoginFields>({
        mode: 'onChange'
    });
    
    const onSubmit:SubmitHandler<ILoginFields> = (data) => {
        console.log('login is work', data);
        reset();
    };
    
    return (
        <>
            
            <div className={styles.background}>
                <div className={styles.blur}/>
            </div>
            <div className={styles.container} >
                <div className={styles.wrapper}>
                    <div className={styles.headBlock}>
                        <LoginLayoutHeader/>  
                    </div>

                    <div className={styles.contetBlock}>
                        <div className={styles.content}>
                            <div className={styles.image} >
                                <Image
                                    src={image}
                                    alt='image'
                                    layout="fill" objectFit="cover"
                                />
                            </div>
                            <div className={styles.info}>
                                
                                {children}
                              
                            </div>
                        </div>      
                    </div>
                </div>

            </div>
        </>
    );
};

export default LoginLayout;