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

  ngOnInit() {
    this.animateMorphing();
  }

  animateMorphing() {
    anime({
      targets: this.elementRef.nativeElement.querySelectorAll(
        ".morphing-demo .polymorph"
      ),
      points: [
        {
          value: [
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
            "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369",
          ],
        },
        {
          value:
            "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369",
        },
        {
          value:
            "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369",
        },
        {
          value:
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
        },
      ],
      easing: "easeOutQuad",
      duration: 2000,
      loop: true,
    });
  }

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

  ngAfterViewInit() {
    //test code 10
    const gridElements = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".grid-container div")
    ).filter((element) => element !== null);

    const animation = anime({
      targets: gridElements,
      backgroundColor: ["#0000FF", "#FF0000"],
      duration: 2000,
      rotate: 90,
      delay: anime.stagger(500, {
        grid: [3, 3],
        from: "center",
      }),
      // autoplay: false,
      loop: true,
    });

    const play = this.elementRef.nativeElement.querySelector(".play");
    play.onclick = () => {
      animation.play();
    };

    const pause = this.elementRef.nativeElement.querySelector(".pause");
    pause.onclick = () => {
      animation.pause();
    };

    const restart = this.elementRef.nativeElement.querySelector(".restart");
    restart.onclick = () => {
      animation.restart();
    };

    const reverse = this.elementRef.nativeElement.querySelector(".reverse");
    reverse.onclick = () => {
      animation.reverse();
    };

    const getTimestamp =
      this.elementRef.nativeElement.querySelector(".timestamp");

    getTimestamp.oninput = function () {
      animation.seek(getTimestamp.value);
    };

    const getScroller =
      this.elementRef.nativeElement.querySelector(".scroller");

    getScroller.oninput = function () {
      animation.seek(animation.duration * (getScroller.value / 100));
    };

    //test code 9
    // const boxElement = this.elementRef.nativeElement.querySelectorAll(
    //   ".grid-container div"
    // );
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

    //test code 8
    // const boxElement = this.elementRef.nativeElement.querySelectorAll(".box");
    // anime({
    //   targets: boxElement,
    //   backgroundColor: ["#0000FF", "#FF0000"],
    //   easing: "easeInOutBounce(1,0.1)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 3000,
    //   translateX: 300,
    //   delay: anime.stagger(100),
    // });

    // anime({
    //   targets: ".squareB",
    //   backgroundColor: ["#22eeee", "#ffcc00"],
    //   easing: "spring(100,100,10,0)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 4000,
    //   translateX: {
    //     value: 200,
    //   },
    //   opacity: {
    //     value: 0.5,
    //   },
    //   rotate: {
    //     value: -360,
    //     delay: 1000,
    //   },
    // });

    // anime({
    //   targets: ".squareC",
    //   backgroundColor: ["#ff33ff", "#FF0000"],
    //   easing: "spring(1,0,10,0)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 3000,
    //   translateX: {
    //     value: 100,
    //   },
    //   opacity: {
    //     value: 0.5,
    //   },
    //   rotate: {
    //     value: 360,
    //     delay: 1000,
    //   },
    // });

    // //test code 7
    // const boxElement = this.elementRef.nativeElement.querySelector(".box");
    // anime({
    //   targets: ".square",
    //   backgroundColor: ["#0000FF", "#FF0000"],
    //   easing: "spring(1,100,10,0)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 3000,
    //   translateX: {
    //     value: 300,
    //   },
    //   opacity: {
    //     value: 0.5,
    //   },
    //   rotate: {
    //     value: 360,
    //     delay: 1000,
    //   },
    // });

    // anime({
    //   targets: ".squareB",
    //   backgroundColor: ["#22eeee", "#ffcc00"],
    //   easing: "spring(100,100,10,0)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 4000,
    //   translateX: {
    //     value: 200,
    //   },
    //   opacity: {
    //     value: 0.5,
    //   },
    //   rotate: {
    //     value: -360,
    //     delay: 1000,
    //   },
    // });

    // anime({
    //   targets: ".squareC",
    //   backgroundColor: ["#ff33ff", "#FF0000"],
    //   easing: "spring(1,0,10,0)",
    //   direction: "alternate",
    //   loop: true,
    //   duration: 3000,
    //   translateX: {
    //     value: 100,
    //   },
    //   opacity: {
    //     value: 0.5,
    //   },
    //   rotate: {
    //     value: 360,
    //     delay: 1000,
    //   },
    // });

    //test code 6
    // const boxElement = this.elementRef.nativeElement.querySelector(".box");
    // anime({
    //   targets: boxElement,
    //   translateY: anime.random(0, 100),
    //   translateX: anime.random(100, 900),
    //   backgroundColor: ["#0000FF", "#FF0000"],
    //   duration: 1000,
    //   easing: "easeInOutQuad",
    //   loop: true, // Enable loop
    //   direction: "alternate", // Reverse animation on each loop iteratio
    // });

    //test code 5 - counter
    // const boxCount = this.elementRef.nativeElement.querySelector(".countUp");

    // anime({
    //   targets: boxCount,
    //   value: [0, 100, 0],
    //   round: 1,
    //   easing: "linear",
    //   duration: 3000,
    //   loop: true, // Enable loop
    // });

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
