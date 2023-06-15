import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { GsapExamplesComponent } from "./core/gsap-examples/gsap-examples.component";
import { SandBoxComponent } from "./core/sand-box/sand-box.component";
import { AnimationComponentComponent } from "./feature/animation-component/animation-component.component";
import { GraphicDesignComponentComponent } from "./feature/graphic-design-component/graphic-design-component.component";
import { InteractionDesignComponent } from "./feature/interaction-design/interaction-design.component";
import { UserExperienceDesignComponentComponent } from "./feature/user-experience-design-component/user-experience-design-component.component";
import { VideoProductionComponentComponent } from "./feature/video-production-component/video-production-component.component";
import { WebDesignComponentComponent } from "./feature/web-design-component/web-design-component.component";

export const routes: Routes = [
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
  {
    path: "sand-box",
    component: SandBoxComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
