import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphicDesignComponentComponent } from "./core/graphic-design-component/graphic-design-component.component";
import { WebDesignComponentComponent } from "./core/web-design-component/web-design-component.component";
import { AnimationComponentComponent } from "./core/animation-component/animation-component.component";
import { VideoProductionComponentComponent } from "./core/video-production-component/video-production-component.component";
import { UserExperienceDesignComponentComponent } from "./core/user-experience-design-component/user-experience-design-component.component";

@NgModule({
  declarations: [
    AppComponent,
    GraphicDesignComponentComponent,
    WebDesignComponentComponent,
    AnimationComponentComponent,
    VideoProductionComponentComponent,
    UserExperienceDesignComponentComponent,
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
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
