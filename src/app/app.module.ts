import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { PlaygroundComponent } from './features/playground/playground.component';
import { AboutMeComponent } from './features/portfolio/about-me/about-me.component';
import { ExperienceComponent } from './features/portfolio/experience/experience.component';
import { EducationComponent } from './features/portfolio/education/education.component';
import { SkillsComponent } from './features/portfolio/skills/skills.component';
import { SpaceComponent } from './features/space/space.component';
import { OpenDetailsComponent } from './features/space/open-details/open-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PlaygroundComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    SpaceComponent,
    OpenDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
