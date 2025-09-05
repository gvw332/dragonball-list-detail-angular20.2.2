import { Routes } from '@angular/router';
import { DragonballListComponent } from './dragonball-list/dragonball-list';
import { DragonballDetailComponent } from './dragonball-detail/dragonball-detail';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dragonball-list/dragonball-list').then(
        (m) => m.DragonballListComponent
      )
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./dragonball-detail/dragonball-detail').then(
        (m) => m.DragonballDetailComponent
      ),
  }


];
