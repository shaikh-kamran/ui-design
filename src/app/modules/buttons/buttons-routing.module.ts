import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
    children: [
      {
        path: 'flat',
        component: FlatButtonComponent
      },
      {
        path: '**',
        redirectTo: 'flat'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
