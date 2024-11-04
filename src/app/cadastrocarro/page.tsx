"use client";

import { TipoCarro } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroCarro() {

    const navigate = useRouter();

    const [cadastroCarro, setCadastroCarro] = useState<TipoCarro>({
        veiculo_placa:"",
        veiculo_modelo:"",
        veiculo_marca:"",
        tipo_combustivel:"",
        cambio:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCadastroCarro({ ...cadastroCarro, [name]: value });
    }

const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
        const response = await fetch("ENDERECO API", {
            method:"POST",
            headers:{
                "Content-Type":"application.json"
            },
            body: JSON.stringify(cadastroCarro)
        });

        if (response.ok){
            alert("Produto cadastrado com sucesso!")
            setCadastroCarro({
                veiculo_placa:"",
                veiculo_modelo:"",
                veiculo_marca:"",
                tipo_combustivel:"",
                cambio:""
            });

            navigate.push("/")
        }
    } catch (error){
        console.error("Falha no cadastro")
    }
}
        return (
            <div>
                <div className="flex items-center justify-center h-screen bg-[#5A85C6] text-black p-4">
                    <form className="bg-[#7EA4DE] p-6 rounded shadow-md w-full max-w-4xl">
                        <h2 className="text-center mb-4 text-3xl">CADASTRO DO AUTOMOVEL</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="idPlaca" className="block mb-2">PLACA DO VEICULO</label>
                                <input type="text" name="veiculo_placa" id="idPlaca" value={cadastroCarro.veiculo_placa} onChange={handleChange} className="border p-2 w-full" placeholder="Digite a placa do seu automovel" required />
                            </div>
                            <div>
                                <label htmlFor="idModelo" className="block mb-2">MODELO DO VEICULO</label>
                                <input type="text" name="veiculo_modelo" id="idModelo" value={cadastroCarro.veiculo_modelo} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o modelo do seu automovel" required />
                            </div>
                            <div>
                                <label htmlFor="idMarca" className="block mb-2">MARCA DO VEICULO</label>
                                <input type="text" name="veiculo_marca" id="idMarca" value={cadastroCarro.veiculo_marca} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu telefone" required />
                            </div>
                            <div>
                                <label htmlFor="idCombustivel" className="block mb-2">TIPO COMBUSTIVEL</label>
                                <input type="text" name="tipo_combustivel" id="idCombustivel" value={cadastroCarro.tipo_combustivel} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu endereço" required />
                            </div>
                            <div>
                                <label htmlFor="idCambio" className="block mb-2">TIPO DO CÂMBIO</label>
                                <input type="text" name="cambio" id="idCambio" value={cadastroCarro.cambio} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o tipo de seu usuário (Cliente ou Oficina)" required />
                            </div>
                        </div>
                        <div className="mt-6 text-center ">
                            <button type="submit" className="bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600 w-60 p-4">CADASTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}