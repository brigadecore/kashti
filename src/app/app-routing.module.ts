import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { BuildComponent } from './build/build.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'build/:id', component: BuildComponent },
  { path: 'styleguide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: environment.routeDebugging })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
