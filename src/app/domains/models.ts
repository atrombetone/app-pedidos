export interface Colaborador {
    nome: string;
    idade: number;
    cpf: string;
    rg: string;
    data_nasc: string;
    signo: string;
    mae: string;
    pai: string;
    email: string;
    senha: string;
    cep: string;
    endereco: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    telefone_fixo: string;
    celular: string;
    altura: string;
    peso: number;
    tipo_sanguineo;
    cor: string;
}

export interface Produto {
    idContrato: number;
    nomeProduto: string;
}

export interface PedidoItem {
    colaborador: Colaborador;
    dtDisponibilizacao: string;
    vlBeneficio: number;
}

export interface Pedido {
    idPedido: number;
    produto: Produto;
    itens: PedidoItem[];
}