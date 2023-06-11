import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SideMenuComponent } from "./core/side-menu/side-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SandBoxComponent } from "./core/sand-box/sand-box.component";
import { InnitalComponent } from "./core/innital/innital.component";
import { TopmenuComponent } from "./core/topmenu/topmenu.component";
import { GsapExamplesComponent } from "./core/gsap-examples/gsap-examples.component";
import { MouseFollowerComponent } from "./core/mouse-follower/mouse-follower.component";
import { ThemeSwitcherComponent } from './core/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SandBoxComponent,
    InnitalComponent,
    TopmenuComponent,
    MouseFollowerComponent,
    ThemeSwitcherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
