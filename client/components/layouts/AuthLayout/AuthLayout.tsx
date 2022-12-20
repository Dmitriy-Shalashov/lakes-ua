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
            
            {/* <LoginLayoutHeader/>
            <div className={styles.wrapper}>
                
                <div className={styles.content}>
                    <div className={styles.image} >
                        <Image
                            src={image}
                            alt='image'
                            layout="fill" objectFit="cover"
                        />
                    </div>
                    <div className={styles.content__info}>
                       
                        {children}
                    </div>
                </div>               
               
            </div> */}
           
        </>
       
            
    /* {children}
            <div >LoginLayout</div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register('firstName', {required: 'Name is require field'})}  type="text"  placeholder='Name'/>
                {errors?.firstName && (
                    <div style={{color: 'red'}}>{errors.firstName.message}</div>
                ) }


                <input {...register('email', {
                    required: 'Email is require field',
                    pattern: {
                        message: 'Please enter valid email!',
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z0-9-.][a-zA-Z0-9-.]+$/
                    }})}  type="text" placeholder='Email'/>
                {errors?.email && (
                    <div style={{color: 'red'}}>{errors.email.message}</div>
                ) }

                <Input placeholder={'name'} />
                <Input placeholder={'phone'}/>
                <Input placeholder={'city'}/>
                <Input placeholder={'street'}/>

                <div>
                    <button className={styles.btn}>LOGIN</button>
                </div>

            </form> */
        
        
    );
};

export default LoginLayout;