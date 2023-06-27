import { Component, ElementRef, HostListener } from "@angular/core";
import anime from "animejs/lib/anime.es.js";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
})
export class SideMenuComponent {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    //  test code 1
    const linkElement = this.elementRef.nativeElement.querySelector(".home");

    anime({
      targets: linkElement,
      translateX: "205px",
      duration: 1000,
      height: 30,
      scale: 3,
      easing: "easeInOutElastic",
    });
  }
}
