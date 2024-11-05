"use client";

import React, { createContext, useContext, useState } from 'react';
import { TipoCarro } from '@/types/types'; // Ajuste conforme necessário

// Criação do contexto
const CarroContext = createContext<{
    cadastroCarro: TipoCarro;
    setCadastroCarro: React.Dispatch<React.SetStateAction<TipoCarro>>;
} | null>(null);

// Hook para usar o contexto
export const useCarro = () => {
    const context = useContext(CarroContext);
    if (!context) {
        throw new Error("useCarro must be used within a CarroProvider");
    }
    return context;
};

// Provedor do contexto
export const CarroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cadastroCarro, setCadastroCarro] = useState<TipoCarro>({
        veiculo_placa: "",
        veiculo_modelo: "",
        veiculo_marca: "",
        tipo_combustivel: "",
        cambio: ""
    });

    return (
        <CarroContext.Provider value={{ cadastroCarro, setCadastroCarro }}>
            {children}
        </CarroContext.Provider>
    );
};