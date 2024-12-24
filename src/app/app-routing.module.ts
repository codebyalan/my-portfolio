import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { PlaygroundComponent } from './features/playground/playground.component';
import { SpaceComponent } from './features/space/space.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'alan', pathMatch: 'full'
  },
  {
    path: 'alan', component: SpaceComponent
  },
  {
    path: 'play', component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
