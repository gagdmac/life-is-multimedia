import { Component, OnInit, ElementRef } from "@angular/core";
import { gsap } from "gsap";

@Component({
  selector: "app-topmenu",
  templateUrl: "./topmenu.component.html",
  styleUrls: ["./topmenu.component.scss"],
})
export class TopmenuComponent implements OnInit {
  staggerOption: string = "random"; // Default stagger option
  multimediaTimeline!: gsap.core.Timeline;
  boxDTimeline!: gsap.core.Timeline;
  // timeline!: gsap.core.Timeline;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".multimedia", { opacity: 0 });
    gsap.set(".boxD", { opacity: 0 });
  }

  ngAfterViewInit() {
    const multimedia = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".multimedia")
    );
    const boxD = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".boxD")
    );

    this.multimediaTimeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });
    this.multimediaTimeline.fromTo(
      multimedia,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: this.mapStaggerOption(this.staggerOption),
      }
    );

    this.boxDTimeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    this.boxDTimeline.fromTo(
      boxD,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: this.mapStaggerOption(this.staggerOption),
      }
    );
  }

  setStagger(option: string) {
    this.staggerOption = option;

    const multimedia = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".multimedia")
    );
    const boxD = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".boxD")
    );

    gsap.killTweensOf(multimedia); // Kill the previous tweens
    gsap.killTweensOf(boxD); // Kill the previous tweens

    gsap.set(multimedia, { opacity: 0, y: -24 });
    gsap.set(boxD, { opacity: 0, y: -24 });

    this.multimediaTimeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });
    this.multimediaTimeline.fromTo(
      multimedia,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: this.mapStaggerOption(option),
      }
    );

    this.boxDTimeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    this.boxDTimeline.fromTo(
      boxD,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: this.mapStaggerOption(option),
      }
    );
  }

  mapStaggerOption(option: string): any {
    switch (option) {
      case "start":
        return { each: 0.1, from: "start" };
      case "center":
        return { each: 0.1, from: "center" };
      case "end":
        return { each: 0.3, from: "end" };
      case "edges":
        return { each: 0.1, from: "edges(0.5)" };
      case "random":
        return { each: 0.2, from: "random" };
      case "x":
        return { each: 0.1, from: "x" };
      case "y":
        return { each: 0.3, from: "y" };
      default:
        return undefined;
    }
  }
}
