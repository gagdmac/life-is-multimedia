import { Component, OnInit, ElementRef } from "@angular/core";
import anime from "animejs/lib/anime.es.js";

@Component({
  selector: "app-sand-box",
  templateUrl: "./sand-box.component.html",
})
export class SandBoxComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const squareElement =
      this.elementRef.nativeElement.querySelector(".square");

    anime({
      targets: squareElement,
      translateY: "200px",
      backgroundColor: ["#0000FF", "#FF0000"],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }
}
