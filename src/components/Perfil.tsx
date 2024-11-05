"use client";
import { useCadastro } from '../context/CadastroContext';


const Perfil = () => {
    const { cadastro } = useCadastro();

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#5A85C6]">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-xl min-w-[300px] min-h-[400px]">
                <h1 className="text-2xl font-bold text-center mb-4">Perfil</h1>
                <div className="flex justify-center mb-4">
                    <p>FOTO PERFIL</p>
                </div>
                <p className="text-center text-lg">{cadastro.nome}</p>
            </div>
        </div>
    );
    
    
    
};

export default Perfil;
