import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { gsap } from "gsap";

@Component({
  selector: "app-innital",
  templateUrl: "./innital.component.html",
  styleUrls: ["./innital.component.scss"],
})
export class InnitalComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".letter", { opacity: 0, y: 1500 });
  }

  ngAfterViewInit() {
    const letters = this.elementRef.nativeElement.querySelectorAll(".letter");
    const boxA = this.elementRef.nativeElement.querySelectorAll(".boxA");

    gsap.to(letters, {
      opacity: 1,
      duration: 3,
      repeat: -1,
      ease: "power3.inOut",
      y: -25,
      yoyo: true,
      repeatDelay: 4,
      delay: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
  }
}
