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
    alteraDados: (nome: string, email: string, idade: number, emprego: string) => void;
    removerUsuario: (id: number) => void;
}

interface TypeChildrenNode {
    children: ReactNode;
} 

export const UsersContext = createContext({} as Props);

export function UsersProvider({children}: TypeChildrenNode){
    const [users, setUsers] = useState<User[]>([]);

    function alteraDados(nome: string, email: string, idade: number, emprego: string){
        let idTemp = users.length + 1;

        const obj = {
            id: idTemp,
            nome,
            email,
            idade,
            emprego
        }

        setUsers([...users, obj]);
    }

    function removerUsuario(id: number): void{
        const newUsers = users.filter(usuario => usuario.id != id);
        setUsers(newUsers);
    }

    return <UsersContext.Provider value={{users, alteraDados, removerUsuario}}>{children}</UsersContext.Provider>
}