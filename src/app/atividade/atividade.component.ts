
import { Component, Input, OnInit } from '@angular/core';
import { AtividadeService } from './atividade.service';
import { Atividade } from './Atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit{
  atividades : Atividade[] = [];
  lista: Atividade[]=[];
  inicia: number = 0;
  inserir: any = { "descricao": ""}
  titulo: String = '';
  btnCanCon: String = '';
  constructor(private AtividadeService: AtividadeService){}
  ngOnInit() {    
    //this.listar(false);      
  }
  onmudouvalor(evento){    
    this.inicia = evento; 
    this.inserir = {}; 
    this.listar(evento); 
  }
  onSubmit(form){            
    this.AtividadeService.registrar(this.inserir).subscribe((lista: Atividade[]) => {
      this.lista = lista;
      this.inserir = { "descricao": ""};
    });             
  }

  concluir(atividade: Atividade){    
    this.AtividadeService.concluir(atividade.id, atividade.concluido).subscribe((atividades: Atividade[]) => {
      this.atividades = atividades;      
    });     
  }

  editar(atividade: Atividade){  
    this.inicia = 1;  
    this.inserir = atividade;           
  }

  excluir(atividade: Atividade){    
    this.AtividadeService.excluir(atividade.id, atividade.concluido).subscribe((atividades: Atividade[]) => {
      this.atividades = atividades;      
    });     
  }

  listar(evento){          
    if (evento == 3) { 
      this.titulo = 'Atividades concluidas';
      this.btnCanCon = 'Refazer';
      this.AtividadeService.listtrue().subscribe((atividades: Atividade[]) => {
        this.atividades = atividades;      
      });    
    } else {
      if (evento == 2) { 
        this.titulo = 'Atividades a serem concluidas';
        this.btnCanCon = 'Finalizar';
        this.AtividadeService.listfalse().subscribe((atividades: Atividade[]) => {
          this.atividades = atividades;      
        }); 
      }    
    }
  }    
}