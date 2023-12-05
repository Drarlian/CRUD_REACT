import {createContext, useState} from 'react';
import React, { ReactNode } from 'react';

export type User = {
    id: number,
    nome: string,
    email: string,
    idade: number,
    emprego: string
}

interface Props {
    users: User[];
}

interface TypeChildrenNode {
    children: ReactNode;
} 

let obj = {
    id: 1,
    nome: 'Renato',
    email: 'renato@gmail.com',
    idade: 12,
    emprego: 'Pintor'
}

export const UsersContext = createContext({} as Props);

export function UsersProvider({children}: TypeChildrenNode){
    const [users, setUsers] = useState<User[]>([obj]);

    return <UsersContext.Provider value={{users}}>{children}</UsersContext.Provider>
}