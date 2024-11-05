"use client";

import Perfil from "@/components/Perfil";
import Link from "next/link";

export default function Inicial(){
    return(

<div className="flex items-center justify-center space-x-60 bg-[#5A85C6]">
    <div>
        <Perfil />
    </div>
    <div className="flex flex-col mt-6 space-y-4">
        <Link href={"/chat"}>
            <button type="submit" className="bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600 w-60">
                Iniciar Chat
            </button>
        </Link>
        <Link href={"/automoveis"}>
            <button type="submit" className="bg-[#1D57AE] text-white p-2 rounded hover:bg-blue-600 w-60">
                Acessar seus veículos
            </button>
        </Link>
    </div>
</div>

    )
}