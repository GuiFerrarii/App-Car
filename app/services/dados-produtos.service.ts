import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  private produtos = [
    {id: 1, nome:'Betoneira', valor: 5000.00, quantidade: 10},
    {id: 2, nome:'Chave inglesa', valor: 15.00, quantidade: 10},
    {id: 3, nome:'Marreta', valor: 200.00, quantidade: 5},
    {id: 4, nome:'Martelo', valor: 25.00, quantidade: 20}
  ]



  constructor() { }

  enviarTodosDados(){
    return this.produtos
  }

  enviarDadosId(id : number){
    const produtoSelecionado = this.produtos.filter(produto => produto.id === id)
    return produtoSelecionado[0]
  }

  recebeDados(enviarDadosId : any ){
    enviarDadosId.id = this.produtos.length + 1
    this.produtos.push(enviarDadosId)
  }

  deletaDados(enviarDadosId : any){
    this.produtos.splice(this.produtos.indexOf(enviarDadosId), 1)
  }
}
