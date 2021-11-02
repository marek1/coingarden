import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StrategieComponent } from './components/strategie/strategie.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { BlogComponent } from './components/blog/blog.component';

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
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
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
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
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
