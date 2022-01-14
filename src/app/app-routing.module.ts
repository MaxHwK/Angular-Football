import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FootballerNewComponent } from './footballer-new/footballer-new.component';
import { FootballerUpdateComponent } from './footballer-update/footballer-update.component';
import { FootballerListComponent } from './footballer-list/footballer-list.component';

const routes: Routes = [
  { path: 'footballers',
    component: FootballerListComponent
  },
  { path: 'new',
    component: FootballerNewComponent
  },
  { path: 'update/:id',
    component: FootballerUpdateComponent
  },
  { path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
