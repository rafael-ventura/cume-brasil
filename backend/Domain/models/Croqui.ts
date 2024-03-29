export class Croqui {
    id: number;
    nome: string;
    imagemUrl: string;
    autor: string;
    descricao?: string;
    fonte_id?: number;


    constructor(id: number, nome: string, imagemUrl: string, autor: string, descricao?: string, fonteId?: number) {
        this.id = id;
        this.nome = nome;
        this.imagemUrl = imagemUrl;
        this.autor = autor;
        this.descricao = descricao;
        this.fonte_id = fonteId;
    }
}