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
import { ProjectService } from './services/project/ProjectService';
import { ProjectComponent } from './project/project.component';
import { BuildStatusBadgeComponent } from './build-status-badge/build-status-badge.component';
import { ApiProjectService } from './services/project/ApiProjectService';
import { PROJECT_SERVICE, BUILD_SERVICE } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    SidebarComponent,
    FooterComponent,
    ProjectComponent,
    BuildComponent,
    BuildStatusBadgeComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: BUILD_SERVICE, useClass: environment.buildServiceType },
    { provide: PROJECT_SERVICE, useClass: environment.projectServiceType },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
