import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  
  
  
  {
    path: 'listagem-produtos',
    loadChildren: () => import('./pages/listagem-produtos/listagem-produtos.module').then( m => m.ListagemProdutosPageModule)
  },
  {
    path: 'detalhes-produtos/:id',
    loadChildren: () => import('./pages/detalhes-produtos/detalhes-produtos.module').then( m => m.DetalhesProdutosPageModule)
  },
 
  {
    path: 'listagem-servicos',
    loadChildren: () => import('./pages/listagem-servicos/listagem-servicos.module').then( m => m.ListagemServicosPageModule)
  },
  {
    path: 'detathes-servicos',
    loadChildren: () => import('./pages/detathes-servicos/detathes-servicos.module').then( m => m.DetathesServicosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
