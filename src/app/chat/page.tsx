"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Chat() {
  const [mensagens, setMensagens] = useState<{ texto: string; autor: string }[]>([]);
  const [entrada, setEntrada] = useState('');

  const enviarMensagem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (entrada.trim() === '') return;

    const novaMensagem = { texto: entrada, autor: 'Usuário' };
    setMensagens((prev) => [...prev, novaMensagem]);

    const respostaIA = { texto: `IA: Você disse "${entrada}"`, autor: 'IA' };
    setMensagens((prev) => [...prev, respostaIA]);

    setEntrada('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#5A85C6] text-black p-4">
      <div className="bg-[#7EA4DE] p-6 rounded shadow-md w-full max-w-4xl">
        <h1 className="text-center mb-4 text-3xl">DiagnosticaAI</h1>
        <div className="border border-gray-300 p-4 h-128 overflow-y-scroll mb-4 rounded">
          {mensagens.map((msg, index) => (
            <div key={index} className={`my-2 ${msg.autor === 'Usuário' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded ${msg.autor === 'Usuário' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300 text-black'}`}>
                <strong>{msg.autor}:</strong> {msg.texto}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={enviarMensagem} className="flex mb-4">
          <input
            type="text"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="Digite sua mensagem"
            className="border p-2 w-full rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#1D57AE] text-white p-2 rounded-r hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
        <div className="text-center">
          <Link href="/orcamentopecas">
            <button className="bg-[#1D57AE] text-white p-4 rounded hover:bg-blue-600 w-full max-w-xs">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


