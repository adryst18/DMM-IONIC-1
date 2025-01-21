import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', //se cambia  home por la palabra inicio
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//dentro de las rutas busca la ruta inicio, el mismo que va  acargar un componente, esta esta importando unn archivo,
//  ruta, una vez importado el archivo, entonces le llamo @id y de esa busca la @
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'pelis',
    loadChildren: () => import('./pelis/pelis.module').then( m => m.PelisPageModule)
  },
  {
    path: 'tiktok',
    loadChildren: () => import('./tiktok/tiktok.module').then( m => m.TiktokPageModule)
  },
  {
    path: 'yutu',
    loadChildren: () => import('./yutu/yutu.module').then( m => m.YutuPageModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'adele',
    loadChildren: () => import('./adele/adele.module').then( m => m.AdelePageModule)
  },
  {
    path: 'reason',
    loadChildren: () => import('./reason/reason.module').then( m => m.ReasonPageModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'dosis',
    loadChildren: () => import('./dosis/dosis.module').then( m => m.DosisPageModule)
  },
  {
    path: 'cry',
    loadChildren: () => import('./cry/cry.module').then( m => m.CryPageModule)
  },
  {
    path: 'billie',
    loadChildren: () => import('./billie/billie.module').then( m => m.BilliePageModule)
  },
  
  {
    //rutas predeterminadas
    path: '', //definir la ruta
    redirectTo: 'login',  //redirige a *cambiar la palabra home por inicio*
    pathMatch: 'full'
  },
  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
