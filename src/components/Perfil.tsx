"use client";
import Image, {StaticImageData} from 'next/image';
import { useCadastro } from '../context/CadastroContext';
import fotoPerfil from "../img/perfil1.jpg"

const Perfil = () => {
    const { cadastro } = useCadastro();

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#5A85C6]">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <h1 className="text-2xl font-bold text-center mb-4">Perfil</h1>
            <div className="flex justify-center mb-4">
                <Image
                    src="/../img/perfil1.jpg" // Caminho da imagem
                    alt="Foto de Perfil"
                    width={200} // Aumenta a largura da imagem
                    height={200} // Aumenta a altura da imagem
                    className="rounded-full" // Para manter a imagem circular
                />
            </div>
            <p className="text-center text-lg">{cadastro.nome}</p>
        </div>
    </div>
    );
};

export default Perfil;
