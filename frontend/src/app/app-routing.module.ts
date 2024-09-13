import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaListComponent } from './components/fazenda-list/fazenda-list.component';
import { FazendaFormComponent } from './components/fazenda-form/fazenda-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/fazendas', pathMatch: 'full' },
  { path: 'fazendas', component: FazendaListComponent },
  { path: 'fazendas/create', component: FazendaFormComponent },
  { path: 'fazendas/edit/:id', component: FazendaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
