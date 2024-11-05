
import Link from "next/link";
export default function Home() {

  
  return (
<main className="flex items-center justify-center h-screen bg-[#5A85C6] text-black p-4">
    <form className="bg-[#7EA4DE] p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-center mb-4 text-3xl">Login</h2>
        <div className="">
            <div className="mb-4">
                <label className="block mb-2">NOME</label>
                <input type="text" name="nome" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">SENHA</label>
                <input type="password" name="senha" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <Link href="/inicial">
            <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 w-full">ENTRAR</button>
            </div>
            </Link>
            </div>
            <Link href="/cadastro">
            <h2 className="text-center mt-4 text-white">Não tem conta? Cadastre-se</h2>
            </Link>
        </form>
    
</main>
  );
}
