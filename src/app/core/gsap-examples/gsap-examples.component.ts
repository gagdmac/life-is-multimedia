import { Component, OnInit } from "@angular/core";
import { gsap } from "gsap";

@Component({
  selector: "app-gsap-examples",
  templateUrl: "./gsap-examples.component.html",
  styleUrls: ["./gsap-examples.component.scss"],
})
export class GsapExamplesComponent implements OnInit {
  ngOnInit() {
    const box0 = document.querySelectorAll(".box0");
    gsap.to(box0, {
      duration: 1,
      y: 25,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box1 = document.querySelectorAll(".box1");
    gsap.to(box1, {
      duration: 1,
      y: 20,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box2 = document.querySelectorAll(".box2");
    gsap.to(box2, {
      duration: 1,
      y: 15,
      x: 15,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box3 = document.querySelectorAll(".box3");
    gsap.to(box3, {
      duration: 1,
      y: 15,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box4 = document.querySelectorAll(".box4");
    gsap.to(box4, {
      duration: 1,
      y: 20,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const box5 = document.querySelectorAll(".box5");
    gsap.to(box5, {
      duration: 1,
      y: 25,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
    });
  }
}
