import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ItemListComponent
  },
  {
    path: 'create',
    component: CreateItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
