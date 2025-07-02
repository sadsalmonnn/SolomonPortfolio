import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { CustomScrollbarComponent } from './custom-scrollbar/custom-scrollbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,

    AboutmeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectcardComponent,
    CustomScrollbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
