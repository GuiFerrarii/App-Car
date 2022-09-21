import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosServicosService } from 'src/app/services/dados-servicos.service';

@Component({
  selector: 'app-detathes-servicos',
  templateUrl: './detathes-servicos.page.html',
  styleUrls: ['./detathes-servicos.page.scss'],
})
export class DetathesServicosPage implements OnInit {

  public servicoSelecionado : any
  
  constructor(
    private route : ActivatedRoute,
    private servico : DadosServicosService
  ) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoSelecionado = this.servico.enviarDadosId(id)
  }
  

}
