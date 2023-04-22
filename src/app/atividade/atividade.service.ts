import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AtividadeService {
  constructor(private http: HttpClient) {  }
         
  listtrue (): Observable<any>{      
    const cadu = 'http://localhost:3000/true';       
    return this.http.get(cadu);
  }

  listfalse (): Observable<any>{        
    const cadu = 'http://localhost:3000/false';       
    return this.http.get(cadu);
  }

  concluir(id: number , status:boolean): Observable<any>{   
    const cadu = 'http://localhost:3000/inserir/concluir/'+String(id)+'/'+String(status);        
    return this.http.get(cadu);
    
  }

  excluir(id: number , status:boolean): Observable<any>{   
    const cadu = 'http://localhost:3000/deletaatividade/'+String(id)+'/'+String(status);        
    return this.http.get(cadu);
  }

  registrar(descricao: String): Observable<any>{       
    const cadu = 'http://localhost:3000/inserir/register';           
    return this.http.post(cadu,descricao);    
  }
}
