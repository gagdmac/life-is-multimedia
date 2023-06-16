import { Component, OnInit, ElementRef } from "@angular/core";
import { gsap } from "gsap";

let tl = gsap.timeline({
  defaults: {
    repeat: -1,
    rotate: 1080,
  },
});

@Component({
  selector: "app-sand-box",
  templateUrl: "./sand-box.component.html",
})
export class SandBoxComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".neon-square", {});
    tl = gsap.timeline({ repeat: -1, yoyo: true });
  }

  ngAfterViewInit() {
    const neonSquare =
      this.elementRef.nativeElement.querySelectorAll(".neon-square");

    tl.to(neonSquare, {
      opacity: 1,
      x: 100,
      y: 150,
      duration: 3,
      ease: "bounce.out",
      stagger: {
        each: 0.2,
        from: "random",
      },
    });

    const navItem = this.elementRef.nativeElement.querySelector(".nav-item");

    navItem.addEventListener("click", () => {
      tl.pause();
    });
  }
}
