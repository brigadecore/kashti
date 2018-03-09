import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BuildComponent } from './build/build.component';
import { ProjectBuildService } from './project-build.service';
import { BuildService } from './build.service';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    SidebarComponent,
    FooterComponent,
    ProjectComponent,
    BuildComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [ProjectBuildService, BuildService],
  bootstrap: [AppComponent]
})
export class AppModule {}
