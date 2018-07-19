import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BuildStatusBadgeComponent } from './build-status-badge/build-status-badge.component';
import { BuildComponent } from './build/build.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './job/job.component';
import { LogComponent } from './log/log.component';
import { SortBuildByStartDatePipe } from './pipes/builds/sort-build-by-start-date.pipe';
import { ProjectComponent } from './project/project.component';
import { BuildService } from './services/build/build.service';
import { JobService } from './services/job/job.service';
import { LogService } from './services/log/log.service';
import { ProjectService } from './services/project/project.service';
import { BuildResolver } from './services/resolvers/build.resolver';
import { BuildLogResolver } from './services/resolvers/buildlog.resolver';
import { BuildsResolver } from './services/resolvers/builds.resolver';
import { JobResolver } from './services/resolvers/job.resolver';
import { JobsResolver } from './services/resolvers/jobs.resolver';
import { LogResolver } from './services/resolvers/log.resolver';
import { ProjectResolver } from './services/resolvers/project.resolver';
import { ProjectsBuildResolver } from './services/resolvers/projects-build.resolver';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    BreadcrumbComponent,
    SidebarComponent,
    FooterComponent,
    ProjectComponent,
    BuildComponent,
    BuildStatusBadgeComponent,
    JobComponent,
    LogComponent,
    SortBuildByStartDatePipe
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
    BuildLogResolver,
    JobsResolver,
    JobResolver,
    LogResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
