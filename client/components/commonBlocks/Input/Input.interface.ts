import { ILoginFields } from '@/components/forms/LoginForm/LoginForm.interface';
import { IRegisterFields } from '@/components/forms/RegisterForm/RegisterForm.interface';

import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface InputProps {
   name: 'email' | 'password' | 'firstName' | 'lastName',
   type: InputTypes,
   placeholder: string,
   value?: string,
   errors: FieldErrors,
   register: UseFormRegister<ILoginFields> | UseFormRegister<IRegisterFields>
}  

export enum InputTypes {
   email = 'text',
   password = 'password',
}