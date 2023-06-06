import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SideMenuComponent } from "./core/side-menu/side-menu.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphicDesignComponentComponent } from "./feature/graphic-design-component/graphic-design-component.component";
import { WebDesignComponentComponent } from "./feature/web-design-component/web-design-component.component";
import { AnimationComponentComponent } from "./feature/animation-component/animation-component.component";
import { VideoProductionComponentComponent } from "./feature/video-production-component/video-production-component.component";
import { UserExperienceDesignComponentComponent } from "./feature/user-experience-design-component/user-experience-design-component.component";
import { InteractionDesignComponent } from "./feature/interaction-design/interaction-design.component";
import { TopmenuComponent } from "./core/topmenu/topmenu.component";
import { GsapExamplesComponent } from "./core/gsap-examples/gsap-examples.component";
import { SandBoxComponent } from './core/sand-box/sand-box.component';
import { InnitalComponent } from './core/innital/innital.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicDesignComponentComponent,
    WebDesignComponentComponent,
    AnimationComponentComponent,
    VideoProductionComponentComponent,
    UserExperienceDesignComponentComponent,
    SideMenuComponent,
    InteractionDesignComponent,
    TopmenuComponent,
    GsapExamplesComponent,
    SandBoxComponent,
    InnitalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "graphic-design",
        component: GraphicDesignComponentComponent,
      },
      {
        path: "web-design",
        component: WebDesignComponentComponent,
      },
      {
        path: "animation",
        component: AnimationComponentComponent,
      },
      {
        path: "video-production",
        component: VideoProductionComponentComponent,
      },
      {
        path: "user-experience-design",
        component: UserExperienceDesignComponentComponent,
      },
      {
        path: "interaction-design",
        component: InteractionDesignComponent,
      },
      {
        path: "gsap-examples",
        component: GsapExamplesComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
