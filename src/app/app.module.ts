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
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';
import { ScrollInViewDirective } from './directives/scroll-in-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,

    AboutmeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectcardComponent,
    CustomScrollbarComponent,
    ContactComponent,
    ScrollInViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
