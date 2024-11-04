"use client"

import React, { createContext, useContext, useState } from 'react';

const CadastroContext = createContext<any>(null);


export const useCadastro = () => {
    return useContext(CadastroContext);
};


export const CadastroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cadastro, setCadastro] = useState({
        nome: "",
        email: "",
        telefone: 0,
        endereco: "",
        tipo_usuario: "",
        idade: 0,
        genero: "",
        cpf: 0
    });

    return (
        <CadastroContext.Provider value={{ cadastro, setCadastro }}>
            {children}
        </CadastroContext.Provider>
    );
};
