import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtividadeComponent } from './atividade/atividade.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AtividadeComponent},
  {path: 'concluida', component: AtividadeComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


