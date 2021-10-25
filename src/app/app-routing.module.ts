import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StrategieComponent } from './components/strategie/strategie.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'start/:id',
    component: StartComponent
  },
  {
    path: 'start/:id/:id1',
    component: StartComponent
  },
  {
    path: 'strategie',
    component: StrategieComponent
  },
  {
    path: 'strategie/:id',
    component: StrategieComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
