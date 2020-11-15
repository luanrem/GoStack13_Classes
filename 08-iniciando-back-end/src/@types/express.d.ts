declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
// Com isso eu anexo mais um tipo dentro da propriedade Request do Express
// Usar sempre que quiser inserir alguma tipagem a mais em uma biblioteca ja importada
