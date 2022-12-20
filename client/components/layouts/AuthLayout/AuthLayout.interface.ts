import { ReactNode } from 'react';

export interface IAdress {
   country: string,
   city: string,
}

export interface ILoginFields {
   email: string,
   firstName: string,
   lastName: string,
   adress: IAdress
}

export interface ILoginLayout {
   children: ReactNode
}