import { Component, OnInit } from "@angular/core";
import gsap from "gsap";

@Component({
  selector: "app-mouse-follower",
  templateUrl: "./mouse-follower.component.html",
})
export class MouseFollowerComponent implements OnInit {
  ngOnInit() {
    this.setupAnimation();
  }

  ngAfterViewInit() {
    gsap.to(".ball", {
      rotate: 20,
      y: 9,
      x: 3,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
    });

    gsap.to(".ball", {
      x: "+=5",
      y: "+=4",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".ball", {
      x: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });

    gsap.to(".ball", {
      y: "+=15",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }

  private setupAnimation() {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }
}
