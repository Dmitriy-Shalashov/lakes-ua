import { FC } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@/components/commonBlocks/Input/Input';
import Button from '@/components/commonBlocks/button/Button';

import styles from './RegisterForm.module.scss';

import { IRegisterFields } from './RegisterForm.interface';
import { InputTypes } from '@/components/commonBlocks/Input/Input.interface';
import { ButtonSize } from '@/components/commonBlocks/button/Button.interface';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
}).required();


const RegisterForm:FC = () => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<IRegisterFields>({
        resolver: yupResolver(schema),
        mode:'onChange'
    });
    console.log('error', errors);
    
    const onSubmit:SubmitHandler<IRegisterFields> = (data) => {
        console.log('data from Register page', data);
        reset();
    };

    return (
        <div className={styles.formWrapper} >
            <div className={styles.formHeader}>
                <h1>Sign UP</h1>
                <div className={styles.headerText}>Hey, Enter your details for register account</div>
            </div>
           
            <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
                <Input type={InputTypes.email} placeholder='first name' register={register} name={'firstName'} errors={errors} />
                <Input type={InputTypes.email} placeholder='last name' register={register} name={'lastName'} errors={errors} />
                <Input type={InputTypes.email} placeholder='email' register={register} name={'email'} errors={errors}/>
                <Input type={InputTypes.password} placeholder='password' register={register} name={'password'} errors={errors} />
                
                <Button buttonSize={ButtonSize.XL} disabled = {!isValid} onClick={handleSubmit(onSubmit)}> Sign UP</Button>  
            </form>
           
            <div className={styles.formFooter}>
                <div>
                    Do you have an account?
                    <Link className={styles.loginLayoutLink} href='/login'>Login Now</Link> 
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;