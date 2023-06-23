import { Component, OnInit, ElementRef } from "@angular/core";
import anime from "animejs/lib/anime.es.js";

@Component({
  selector: "app-sand-box",
  templateUrl: "./sand-box.component.html",
})
export class SandBoxComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  // counter: number = 0;
  // interval: any;

  ngOnInit() {}

  // ngOnInit() {
  //   this.interval = setInterval(() => {
  //     if (this.counter < 100) {
  //       this.counter++;
  //     } else {
  //       clearInterval(this.interval);
  //     }
  //   }, 100);
  // }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }

  //test code 5 - counter
  ngAfterViewInit() {
    const boxCount = this.elementRef.nativeElement.querySelector(".countUp");

    anime({
      targets: boxCount,
      value: [0, 100, 0],
      round: 1,
      easing: "linear",
      duration: 3000,
      loop: true, // Enable loop
    });

    //test code 4
    // const squareElement =
    //   this.elementRef.nativeElement.querySelector(".square");
    // const allE = this.elementRef.nativeElement.querySelectorAll("div");

    // const boxStats = this.elementRef.nativeElement.querySelector("#stats");
    // const boxDistance = {
    //   distance: 0,
    //   progress: "0%",
    // };

    // anime({
    //   targets: boxDistance,
    //   distance: 300,
    //   progress: "100%",
    //   update: function () {
    //     boxStats.innerHTML = JSON.stringify(boxDistance);
    //     // boxStats.innerHTML = Object.values(boxDistance);
    //     // boxStats.innerHTML = boxDistance.distance;
    //   },
    //   round: 1,
    //   easing: "linear",
    // });

    // anime({
    //   targets: [".box"],
    //   translateX: "500px",
    //   duration: 1000,
    //   rotate: 145,
    //   scale: 1.2,
    //   easing: "easeInOutBack",
    //   // loop: true, // Enable loop
    //   // direction: "alternate", // Reverse animation on each loop iteratio
    // });

    //test code 3
    // const squareElement =
    //   this.elementRef.nativeElement.querySelector(".square");
    // const allE = this.elementRef.nativeElement.querySelectorAll("div");

    // allE.forEach((element: HTMLElement, i: number) => {
    //   anime({
    //     targets: element,
    //     translateX: 300 + i * 50,
    //     rotate: 130,
    //     duration: 1000,
    //     easing: "easeInOutQuad",
    //     loop: true, // Enable loop
    //     direction: "alternate", // Reverse animation on each loop iteratio
    //   });
    // });

    //test code 2
    // const squareElement =
    //   this.elementRef.nativeElement.querySelector(".square");
    // const allE = this.elementRef.nativeElement.querySelectorAll("div");

    // anime({
    //   targets: allE[2],
    //   translateY: "200px",
    //   duration: 1000,
    //   easing: "easeInOutQuad",
    //   loop: true, // Enable loop
    //   direction: "alternate", // Reverse animation on each loop iteratio
    // });

    //test code 1
    // const squareElement =
    //   this.elementRef.nativeElement.querySelector(".square");

    // anime({
    //   targets: squareElement,
    //   translateY: "200px",
    //   backgroundColor: ["#0000FF", "#FF0000"],
    //   duration: 1000,
    //   easing: "easeInOutQuad",
    //   loop: true, // Enable loop
    //   direction: "alternate", // Reverse animation on each loop iteratio
    // });
  }
}
