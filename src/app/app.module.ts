import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SideMenuComponent } from "./core/side-menu/side-menu.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SandBoxComponent } from "./core/sand-box/sand-box.component";
import { InnitalComponent } from "./core/innital/innital.component";
import { TopmenuComponent } from "./core/topmenu/topmenu.component";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SandBoxComponent,
    InnitalComponent,
    TopmenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
