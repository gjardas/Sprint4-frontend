"use client";

import React from 'react';
import { useCarro } from "@/context/CarroContext"; // Verifique o caminho
import Link from 'next/link';

const CarroInfo: React.FC = () => {
    const { cadastroCarro } = useCarro(); // Deve funcionar se estiver dentro do CarroProvider

    return (
<div className="flex items-center justify-center h-screen bg-[#5A85C6] text-black p-4">
    <div className="bg-[#7EA4DE] p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-center mb-4 text-3xl">INFORMAÇÕES DO CARRO</h2>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <p className="font-semibold">Placa:</p>
                <p>{cadastroCarro.veiculo_placa || "Não cadastrado"}</p>
            </div>
            <div>
                <p className="font-semibold">Modelo:</p>
                <p>{cadastroCarro.veiculo_modelo || "Não cadastrado"}</p>
            </div>
            <div>
                <p className="font-semibold">Marca:</p>
                <p>{cadastroCarro.veiculo_marca || "Não cadastrado"}</p>
            </div>
            <div>
                <p className="font-semibold">Tipo de Combustível:</p>
                <p>{cadastroCarro.tipo_combustivel || "Não cadastrado"}</p>
            </div>
            <div>
                <p className="font-semibold">Tipo do Câmbio:</p>
                <p>{cadastroCarro.cambio || "Não cadastrado"}</p>
            </div>
        </div>
        <div className="mt-6 text-center">
            <Link href={"/inicial"}>
            <button className="bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600 w-60">
                Voltar
            </button>
            </Link>
        </div>
    </div>
</div>

    );
};

export default CarroInfo;
