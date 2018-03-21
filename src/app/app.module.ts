import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BuildComponent } from './build/build.component';
import { ProjectService } from './services/project/project.service';
import { ProjectComponent } from './project/project.component';
import { BuildStatusBadgeComponent } from './build-status-badge/build-status-badge.component';
import { ApiProjectService } from './services/project/api-project.service';
import { BuildService } from './services/build/build.service';
import { ProjectResolver } from './services/resolvers/project.resolver';
import { BuildsResolver } from './services/resolvers/builds.resolver';
import { ProjectsBuildResolver } from './services/resolvers/projects-build.resolver';
import { BuildResolver } from './services/resolvers/build.resolver';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    SidebarComponent,
    FooterComponent,
    ProjectComponent,
    BuildComponent,
    BuildStatusBadgeComponent,
    BreadcrumbComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: BuildService, useClass: environment.buildServiceType },
    { provide: ProjectService, useClass: environment.projectServiceType },
    ProjectResolver,
    ProjectsBuildResolver,
    BuildsResolver,
    BuildResolver

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
