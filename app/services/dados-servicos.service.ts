import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosServicosService {
  private servicos = [
    {id: 1, nome:'alinhamento', valor: 200.00, garantia: 6},
    {id: 2, nome:'revisão', valor: 100.00, garantia: 4},
    {id: 3, nome:'troca-pneu', valor: 80.00, garantia: 7},
    {id: 4, nome:'balanceamento', valor: 90.00, garantia: 2}

  ]

  constructor() { }

  enviarTodosDados(){
    return this.servicos
  }

  enviarDadosId(id : number){
    const servicoSelecionado = this.servicos.filter(servico => servico.id === id)
    return servicoSelecionado[0]
  }
}

