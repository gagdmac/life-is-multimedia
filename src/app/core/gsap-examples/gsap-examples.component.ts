import { Component, OnInit, ElementRef } from "@angular/core";
import { gsap } from "gsap";

let tl = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power3.inOut",
  },
});

gsap.defaults({
  duration: 1, // Set global default duration to 1 second
});

@Component({
  selector: "app-gsap-examples",
  templateUrl: "./gsap-examples.component.html",
  styleUrls: ["./gsap-examples.component.scss"],
})
export class GsapExamplesComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const box0 = document.querySelector(".box0");
    gsap.set(box0, { opacity: 0 });
    gsap.to(box0, {
      duration: 2,
      y: 25,
      opacity: 1,
      repeat: -1,
      yoyo: true,
    });

    const box1 = document.querySelector(".box1");
    gsap.to(box1, {
      duration: 1,
      y: 20,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box2 = document.querySelector(".box2");
    gsap.to(box2, {
      duration: 1,
      y: 15,
      x: 15,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box3 = document.querySelector(".box3");
    gsap.to(box3, {
      duration: 1,
      y: 15,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box4 = document.querySelector(".box4");
    gsap.to(box4, {
      duration: 1,
      y: 20,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box5 = document.querySelector(".box5");
    gsap.to(box5, {
      duration: 1,
      y: 25,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    //STAGGERS
    const boxA = document.querySelectorAll(".boxA");
    gsap.to(boxA, {
      duration: 1,
      y: 25,
      opacity: 0.3,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: 0,
      },
    });

    const boxB = document.querySelectorAll(".boxB");
    gsap.to(boxB, {
      duration: 1,
      y: 25,
      opacity: 0.3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.5,
        from: "center",
      },
    });

    // out of ngOnInit - just call
    gsap.set(".letter", { opacity: 0 });
    gsap.set(".boxC1", {});
  }

  ngAfterViewInit() {
    const letters = this.elementRef.nativeElement.querySelectorAll(".letter");
    gsap.to(letters, {
      opacity: 1,
      duration: 1,
      repeat: -1,
      y: 24,
      yoyo: true,
      ease: "elastic.out(1, 0.3)",
      repeatDelay: 4,
      delay: 1,
      stagger: {
        each: 0.2,
        from: "random",
      },
    });

    const boxC1 = this.elementRef.nativeElement.querySelector(".boxC1");
    const boxC2 = this.elementRef.nativeElement.querySelector(".boxC2");
    const boxC3 = this.elementRef.nativeElement.querySelector(".boxC3");

    tl.timeScale(0.5);
    tl.to(boxC1, {
      scale: 0,
      opacity: 0,
    });
    tl.to(boxC2, {
      x: -50,
    });
    tl.to(boxC3, {
      x: -90,
      rotate: 360,
    });
    tl.set(boxC1, {
      x: 50,
    });
    tl.to(boxC1, {
      scale: 1,
      opacity: 1,
      rotate: 1080,
    });
  }
}
