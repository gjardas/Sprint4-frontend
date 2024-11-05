export type TipoCadastro = {
    nome:string;
    email:string;
    telefone:number;
    endereco:string;
    tipo_usuario:string;
    idade:number;
    genero:string;
    cpf:number;
}

export type TipoCarro = {
    veiculo_placa:string;
    veiculo_modelo:string;
    veiculo_marca:string;
    tipo_combustivel:string;
    cambio:string;
}

export type TipoPeca = {
    nome:string;
    preco:number
}