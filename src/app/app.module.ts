import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { AppExperiencesComponent } from './app-experiences/app-experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppHomeComponent,
    AppFooterComponent,
    AppProjectsComponent,
    AppExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    AppMenuComponent,
    AppFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
