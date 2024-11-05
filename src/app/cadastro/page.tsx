"use client";

import { TipoCadastro } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {

    const navigate = useRouter();

    const [cadastro, setCadastro] = useState<TipoCadastro>({
        nome: "",
        email: "",
        telefone: 0,
        endereco: "",
        tipo_usuario: "",
        idade: 0,
        genero: "",
        cpf: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'telefone' || name === 'cpf') {
            const numericValue = value.replace(/[^0-9]/g, "");
            setCadastro({ ...cadastro, [name]: numericValue });
        } else {
            setCadastro({ ...cadastro, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:8080/AulaRestApi_war/api/cliente", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(cadastro)
            });

         if (response.ok) {
            alert("Cadastrado com sucesso!")
            navigate.push("/cadastrocarro")
         }
    }catch (error){
        console.error("Falha no cadastro", error);
    }
}

    return (
<div>
    <div className="flex items-center justify-center h-screen bg-[#5A85C6] text-black p-4">
        <form onSubmit={handleSubmit} className="bg-[#7EA4DE] p-6 rounded shadow-md w-full max-w-4xl">
            <h2 className="text-center mb-4 text-3xl">CADASTRO</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="idNome" className="block mb-2">NOME</label>
                    <input type="text" name="nome" id="idNome" value={cadastro.nome} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu nome" required />
                </div>
                <div>
                    <label htmlFor="idEmail" className="block mb-2">EMAIL</label>
                    <input type="email" name="email" id="idEmail" value={cadastro.email} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu email" required />
                </div>
                <div>
                    <label htmlFor="idTelefone" className="block mb-2">TELEFONE</label>
                    <input type="text" name="telefone" id="idTelefone" value={cadastro.telefone} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu telefone" required />
                </div>
                <div>
                    <label htmlFor="idEndereco" className="block mb-2">ENDEREÇO</label>
                    <input type="text" name="endereco" id="idEndereco" value={cadastro.endereco} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu endereço" required />
                </div>
                <div>
                    <label htmlFor="idTipoUsuario" className="block mb-2">TIPO USUÁRIO</label>
                    <input type="text" name="tipo_usuario" id="idTipoUsuario" value={cadastro.tipo_usuario} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o tipo de seu usuário (Cliente ou Oficina)" required />
                </div>
                <div>
                    <label htmlFor="idIdade" className="block mb-2">IDADE</label>
                    <input type="number" name="idade" id="idIdade" value={cadastro.idade} onChange={handleChange} className="border p-2 w-full" placeholder="Digite sua idade" required />
                </div>
                <div>
                    <label htmlFor="idGenero" className="block mb-2">GÊNERO</label>
                    <input type="text" name="genero" id="idGenero" value={cadastro.genero} onChange={handleChange} className="border p-2 w-full" placeholder="Qual o seu gênero" required />
                </div>
                <div>
                    <label htmlFor="idCPF" className="block mb-2">CPF</label>
                    <input type="text" name="cpf" id="idCpf" value={cadastro.cpf} onChange={handleChange} className="border p-2 w-full" placeholder="Digite o seu CPF" required />
                </div>
            </div>
            <Link href={"/cadastrocarro"}>
            <div className="mt-6 text-center ">
                <button type="submit" className="bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600 w-60 p-4">CADASTRAR</button>
            </div>
            </Link>
        </form>
    </div>
</div>

    )
}