import { FC, useState } from 'react';
import { BiErrorCircle, BiShow, BiHide } from 'react-icons/bi';

import {InputProps, InputTypes} from './Input.interface';
import styles from './Input.module.scss';

const Input:FC<InputProps> = ({type, placeholder, value, name, register, errors, ...rest }) => {
    const [showIcon, setShowIcon] = useState (<BiShow/>);
    const [inputType, setInputType] = useState (type);
    
    const error = `${errors?.[name]?.message}`;
    
    const handleChangeShowIcon = () => {
        (inputType === InputTypes.password) ? setInputType(InputTypes.email) : setInputType(InputTypes.password);
        (inputType === InputTypes.password) ? setShowIcon(<BiHide/>) : setShowIcon(<BiShow/>);
    };

    return (
        <div className={styles.inputBox}>
            <input 
                className={styles.input} 
                type={inputType} 
                value={value}
                required 
                {...register(name)}
                {...rest}
                
            />
            {placeholder && (
                <span className={styles.label}>
                    {placeholder}
                </span>
            )}
            {name === InputTypes.password && (
                <div className={styles.showIcon} onClick={handleChangeShowIcon}>
                    <h2>{showIcon}</h2>
                </div>)}
            {errors?.[name] && (
                <div className={styles.error}>
                    <div className={styles.errorWrapper}>
                        <BiErrorCircle/>
                        <p className={styles.errorMassege}>{error}</p>
                    </div>
                </div>)}
        </div>
    );
};

export default Input;