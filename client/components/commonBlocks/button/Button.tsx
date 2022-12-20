import { FC } from 'react';
import { IButton, ButtonStyle, ButtonSize, ButtonType } from './Button.interface';


import styles from './Button.module.scss';

const Button: FC <IButton >  = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    disabled
}) => {
    const checkButtonType = type ? type : ButtonType.button;
    const checkButtonStyle = buttonStyle ? buttonStyle : ButtonStyle.outline;
    const checkButtonSize = buttonSize ? buttonSize : ButtonSize.L;

    return (
        <button
            type={checkButtonType}
            onClick={onClick}
            className ={`${styles.button} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}; 

export default Button;