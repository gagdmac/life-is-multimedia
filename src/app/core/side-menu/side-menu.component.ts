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

    const linkElement = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".nav-item")
    ).filter((element) => element !== null);

    // anime({
    //   targets: boxElement,
    //   backgroundColor: ["#0000FF", "#FF0000"],
    //   // direction: "alternate",
    //   loop: true,
    //   duration: 2000,
    //   // translateX: 300,
    //   rotate: 90,
    //   delay: anime.stagger(500, {
    //     grid: [3, 3],
    //     axis: "y",
    //   }),
    // });

    anime({
      targets: linkElement,
      translateX: "205px",
      duration: 1000,
      height: 30,
      scale: 3,
      easing: "easeInOutElastic",
      delay: anime.stagger(500, {
        grid: [1, 1],
        axis: "y",
      }),
      complete: () => {
        // Set default state after animation completion
        anime({
          targets: linkElement,
          translateX: 0,
          duration: 1000,
          height: 25,
          scale: 1,
        });
      },
    });
  }
}
