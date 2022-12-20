import { ReactNode } from 'react';

export interface IButton {
   type?: ButtonType,
   children: string | ReactNode,
   buttonStyle?: ButtonStyle,
   buttonSize: ButtonSize,
   onClick: () => void,
   disabled?: boolean
}

export enum ButtonStyle {
   outline = 'btn--primary--outline',
   disabled = 'btn--disabled'
}

export enum ButtonSize {
   L = 'btn--L',
   XL = 'btn--XL',
   XXL = 'btn--XXL',
}

export enum ButtonType {
   button = 'button',
   submit = 'submit'
}