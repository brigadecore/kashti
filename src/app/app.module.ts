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
import { JobComponent } from './job/job.component';
import { LogComponent } from './log/log.component';
import { BuildStatusBadgeComponent } from './build-status-badge/build-status-badge.component';
import { ApiProjectService } from './services/project/api-project.service';
import { BuildService } from './services/build/build.service';
import { JobService } from './services/job/job.service';
import { LogService } from './services/log/log.service';
import { ProjectResolver } from './services/resolvers/project.resolver';
import { BuildsResolver } from './services/resolvers/builds.resolver';
import { JobsResolver } from './services/resolvers/jobs.resolver';
import { ProjectsBuildResolver } from './services/resolvers/projects-build.resolver';
import { BuildResolver } from './services/resolvers/build.resolver';
import { JobResolver } from './services/resolvers/job.resolver';
import { LogResolver } from './services/resolvers/log.resolver';


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
    JobComponent,
    LogComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: BuildService, useClass: environment.buildServiceType },
    { provide: ProjectService, useClass: environment.projectServiceType },
    { provide: JobService, useClass: environment.jobServiceType },
    { provide: LogService, useClass: environment.logServiceType },
    ProjectResolver,
    ProjectsBuildResolver,
    BuildsResolver,
    BuildResolver,
    JobsResolver,
    JobResolver,
    LogResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
