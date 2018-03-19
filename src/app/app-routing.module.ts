import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { BuildComponent } from './build/build.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ProjectResolver } from './services/resolvers/project.resolver';
import { BuildsResolver } from './services/resolvers/builds.resolver';
import { ProjectsBuildResolver } from './services/resolvers/projects-build.resolver';
import { BuildResolver } from './services/resolvers/build.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',
    component: DashboardComponent,
    resolve: { projectsBuilds: ProjectsBuildResolver }
  },
  { path: 'project/:id',
    component: ProjectComponent,
    resolve: { project: ProjectResolver, builds: BuildsResolver }
  },
  { path: 'build/:id',
    component: BuildComponent,
    resolve: { build: BuildResolver }
  },
  { path: 'styleguide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: environment.routeDebugging })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
