import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
   constructor(private elementRef: ElementRef) {}

 animatedText!: string;

 ngOnInit() {
    // this.animatedText = 'Life is Multimedia';
    // this.animateText();

       gsap.set(".multimedia", { opacity: 0 });
  }

  ngAfterViewInit() {
    const letters = this.elementRef.nativeElement.querySelectorAll(".multimedia");
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
}
  // animateText() {
  //   const textElement = document.querySelector(".text");
  //   const text = "Life is Multimedia";
  //   const chars = text.split("");

  //   gsap.fromTo(textElement, {
  //     opacity: 0,
  //     y: 20
  //   }, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     delay: 0.5,
  //     onComplete: () => {
  //       gsap.to(chars, {
  //         duration: 2,
  //         scrambleText: {
  //           text: chars.join(""),
  //           chars: "lowerCase"
  //         },
  //         onUpdate: () => {
  //           this.animatedText = chars.join("");
  //         },
  //         onComplete: () => {
  //           this.animatedText = text;
  //         }
  //       });
  //     }
  //   });
  // }
}
