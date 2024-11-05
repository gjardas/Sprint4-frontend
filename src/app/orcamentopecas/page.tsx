import Link from "next/link";

export default function Pecas(){
    return (
        <div className="flex items-center justify-center h-screen bg-[#5A85C6] p-4">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <p className="text-lg font-bold text-black">Os servidores estão fora do ar</p>
                <Link href={"inicial"}>
                <button className="mt-4 bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600">Voltar</button>
                </Link>
            </div>
        </div>
    );
    
}