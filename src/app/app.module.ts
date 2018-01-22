import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BuildComponent } from './build/build.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    SidebarComponent,
    FooterComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
