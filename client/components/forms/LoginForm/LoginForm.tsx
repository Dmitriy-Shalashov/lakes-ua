import { FC } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@/components/commonBlocks/Input/Input';
import Button from '@/components/commonBlocks/button/Button';

import styles from './LoginForm.module.scss';

import { ILoginFields } from './LoginForm.interface';
import { InputTypes } from '@/components/commonBlocks/Input/Input.interface';
import { ButtonSize } from '@/components/commonBlocks/button/Button.interface';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
}).required();


const LoginForm:FC = () => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<ILoginFields>({
        resolver: yupResolver(schema),
        mode:'onChange'
    });
    
    const onSubmit:SubmitHandler<ILoginFields> = (data) => {
        console.log('data from Login page', data);
        reset();
    };

    
    return (
        <div className={styles.formWrapper} >
            <div className={styles.formHeader}>
                <h1>Sign IN</h1>
                <div className={styles.headerText}>Hey, Enter your details to get sign in to your account</div>
            </div>
           
            <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
                <Input type={InputTypes.email} placeholder='email' register={register} name={'email'} errors={errors}/>
                <Input type={InputTypes.password} placeholder='password' register={register} name={'password'} errors={errors} />
                <Button buttonSize={ButtonSize.XL} disabled = {!isValid} onClick={handleSubmit(onSubmit)}> Sign IN</Button>  
            </form>
           
            <div className={styles.formFooter}>
                <div>
                    Don&apos;t have an account?
                    <Link className={styles.loginLayoutLink} href='/register'>Register Now</Link> 
                </div>
            </div>
        </div>
    );
};

export default LoginForm;