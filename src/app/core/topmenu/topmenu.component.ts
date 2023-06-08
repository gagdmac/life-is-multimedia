import { Component, OnInit, ElementRef } from "@angular/core";
import { gsap } from "gsap";

@Component({
  selector: "app-topmenu",
  templateUrl: "./topmenu.component.html",
  styleUrls: ["./topmenu.component.scss"],
})
export class TopmenuComponent implements OnInit {
  staggerOption: string = "random"; // Default stagger option
  timeline!: gsap.core.Timeline;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".multimedia", { opacity: 0 });
  }

  ngAfterViewInit() {
    this.timeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    const multimedia =
      this.elementRef.nativeElement.querySelectorAll(".multimedia");
    this.timeline.fromTo(
      multimedia,
      {
        opacity: 0,
        y: -24,
      },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: {
          each: 0.2,
          from: this.mapStaggerOption(this.staggerOption),
        },
      }
    );
  }

  setStagger(option: string) {
    this.staggerOption = option;
    const multimedia =
      this.elementRef.nativeElement.querySelectorAll(".multimedia");
    this.timeline.pause(); // Pause the timeline
    this.timeline.kill(); // Kill the timeline and reset it

    this.timeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    this.timeline.fromTo(
      multimedia,
      {
        opacity: 0,
        y: -24,
      },
      {
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: {
          each: 0.2,
          from: this.mapStaggerOption(option),
        },
      }
    );
    this.timeline.play(); // Play the timeline
  }

  mapStaggerOption(
    option: string
  ):
    | number
    | "start"
    | "center"
    | "end"
    | "edges"
    | "random"
    | [number, number]
    | undefined {
    switch (option) {
      case "start":
        return "start";
      case "center":
        return "center";
      case "end":
        return "end";
      case "edges":
        return "edges";
      case "random":
        return "random";
      case "x":
        return [1, 0];
      case "y":
        return [0, 1];
      case "none":
        return undefined;
      default:
        return undefined;
    }
  }
}
