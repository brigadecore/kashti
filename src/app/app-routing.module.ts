import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { BuildComponent } from './build/build.component';
import { ProjectComponent } from './project/project.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'build', component: BuildComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'styleguide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
