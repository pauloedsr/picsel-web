export class EnsaioView {
    ensaio: Ensaio;
    fotos: Foto[];
}
  
export class Foto {
    _id: string;
    updatedAt: string;
    createdAt: string;
    nome: string;
    ensaio: string;
    foto: string;
    selecionado: boolean;
    __v: number;
}

export class Ensaio {
    _id: string;
    updatedAt: string;
    createdAt: string;
    nome: string;
    chave: string;
    __v: number;
}