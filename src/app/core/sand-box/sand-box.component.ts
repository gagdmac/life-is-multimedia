import { Component, OnInit, ElementRef } from "@angular/core";
import { gsap } from "gsap";

@Component({
  selector: "app-sand-box",
  templateUrl: "./sand-box.component.html",
})
export class SandBoxComponent implements OnInit {
  staggerOption: string = "random"; // Default stagger option
  multimediaTimeline!: gsap.core.Timeline;
  boxDTimeline!: gsap.core.Timeline;
  colorPalette: string[] = []; // Color palette property
  isHovering: boolean = false;
  hoverTimeout: any;
  clickCount: number = 0; // Counter for mouse clicks

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".multimedia", { opacity: 0 });
    gsap.set(".boxD", { opacity: 0 });
    gsap.set("#click-raton", { opacity: 0 });
    gsap.set("#gota", { opacity: 0, y: -10 });
    gsap.set("#angry", { opacity: 0 });
    this.generateColorPalette(); // Generate color palette
  }

  // Method to add hover behavior to the boxD elements
  addHoverEffectToBoxD(boxD: HTMLElement[]) {
    boxD.forEach((element: HTMLElement) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, { duration: 0.2, rotate: 180 });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(element, { duration: 0.2, rotate: -180 });
      });
    });
  }

  initializeAngryElement() {
    const angryElement = document.querySelector("#angry") as HTMLElement;
    angryElement.addEventListener("click", () => {
      this.clickCount++; // Increment click count

      if (this.clickCount > 5) {
        gsap.to(angryElement, {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: "bounce.out",
          y: -500,
        }); // Set opacity to 1 after 5 clicks

        setTimeout(() => {
          gsap.to(angryElement, { opacity: 0 }); // Set opacity back to 0 after 3 seconds
        }, 3000);
        this.clickCount = 0; // Restart click c
      }
    });
  }

  // initializeAngryElement() {
  //   const angryElement = document.querySelector("#angry") as HTMLElement;
  //   let clickCount = 0; // Initialize click count

  //   angryElement.addEventListener("click", () => {
  //     clickCount++; // Increment click count

  //     if (clickCount === 5) {
  //       const timeline = gsap.timeline();

  //       timeline.to(angryElement, {
  //         scale: 2,
  //         opacity: 1,
  //         duration: 2.5,
  //         ease: "bounce.out",
  //         y: -500,
  //       });

  //       timeline.to(angryElement, {
  //         opacity: 0,
  //         duration: 0,
  //         delay: 3,
  //         onComplete: () => {
  //           gsap.set(angryElement, { opacity: 0 }); // Set opacity back to 0 after 3 seconds
  //         },
  //       });

  //       clickCount = 0; // Reset click count
  //     }
  //   });
  // }

  ngAfterViewInit() {
    const multimedia: HTMLElement[] = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".multimedia")
    );
    const boxD: HTMLElement[] = this.initializeElements(".boxD");

    this.multimediaTimeline = this.createTimeline(
      multimedia,
      this.staggerOption
    );
    this.boxDTimeline = this.createTimeline(boxD, this.staggerOption);

    // Add hover behavior to the boxD elements
    this.addHoverEffectToBoxD(boxD);

    const avatarElement = document.querySelector("#avatar") as HTMLElement;
    const gotaElement = document.querySelector("#gota") as HTMLElement;

    avatarElement.addEventListener("mouseenter", () => {
      this.hoverTimeout = setTimeout(() => {
        gsap.to(gotaElement, {
          opacity: 1,
          y: "+=15",
        });
      }, 2000);
    });

    avatarElement.addEventListener("mouseleave", () => {
      clearTimeout(this.hoverTimeout);
      gsap.to(gotaElement, {
        opacity: 0,
        delay: 1,
        y: 15,
        onComplete: () => {
          // Move back to the original position
          gsap.to(gotaElement, {
            y: -10,
            delay: 0,
          });
        },
      });
    });

    this.initializeAngryElement();
  }

  setStagger(option: string) {
    this.staggerOption = option;

    const multimedia: HTMLElement[] = Array.from(
      this.elementRef.nativeElement.querySelectorAll(".multimedia")
    );
    const boxD: HTMLElement[] = this.initializeElements(".boxD");

    gsap.killTweensOf(multimedia); // Kill the previous tweens
    gsap.killTweensOf(boxD); // Kill the previous tweens

    gsap.set(multimedia, { opacity: 0, y: -24 });
    gsap.set(boxD, { opacity: 0, y: -24 });

    this.multimediaTimeline = this.createTimeline(multimedia, option);
    this.boxDTimeline = this.createTimeline(boxD, option);

    // Add hover behavior to the boxD elements
    this.addHoverEffectToBoxD(boxD);

    const svgElement = document.querySelector("#mano-raton") as HTMLElement;
    const clickElement = document.querySelector("#click-raton") as HTMLElement;

    gsap.to(svgElement, {
      rotate: "2%",
      duration: 0.1,
      ease: "power1.inOut",
      onComplete: () => {
        // Rotate back to the original position
        gsap.to(svgElement, {
          rotate: "0",
          duration: 0.1,
          ease: "power1.inOut",
        });

        // Set opacity 1 to the click element
        gsap.set(clickElement, {
          opacity: 1,
        });

        // Fade out the click element after .1 second
        gsap.to(clickElement, {
          opacity: 0,
          duration: 0.2,
          delay: 0.1,
          ease: "power1.inOut",
        });
      },
    });

    this.clickCount++; // Increment click count

    if (this.clickCount > 5) {
      const angryElement = document.querySelector("#angry") as HTMLElement;
      gsap.to(angryElement, { opacity: 1 }); // Set opacity to 1 after 5 clicks

      setTimeout(() => {
        gsap.to(angryElement, { opacity: 0 }); // Set opacity back to 0 after 3 seconds
      }, 3000);
      this.clickCount = 0; // Restart click c
    }
  }

  private initializeElements(selector: string): HTMLElement[] {
    return Array.from(this.elementRef.nativeElement.querySelectorAll(selector));
  }

  private createTimeline(
    elements: HTMLElement[],
    staggerOption: string
  ): gsap.core.Timeline {
    return gsap.timeline({ defaults: { ease: "power3.inOut" } }).fromTo(
      elements,
      { opacity: 0, y: -24, scale: 0 },
      {
        scale: 1,
        opacity: 1,
        y: 24,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
        repeatDelay: 3,
        stagger: this.mapStaggerOption(staggerOption),
        onUpdate: () => {
          this.updateBoxDColors(elements); // Update boxD colors during animation
        },
        to: {
          backgroundColor: this.colorPalette[0], // Set a single color from the colorPalette array
        },
      }
    );
  }

  // ngAfterViewInit() {
  //   const multimedia = Array.from(
  //     this.elementRef.nativeElement.querySelectorAll(".multimedia")
  //   );
  //   const boxD:HTMLElement[] = Array.from(
  //     this.elementRef.nativeElement.querySelectorAll(".boxD")
  //   );

  //   this.multimediaTimeline = gsap.timeline({
  //     defaults: { ease: "power3.inOut" },
  //   });
  //   this.multimediaTimeline.fromTo(
  //     multimedia,
  //     { opacity: 0, y: -24 },
  //     {
  //       opacity: 1,
  //       y: 24,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "elastic.out(1, 0.3)",
  //       delay: 1,
  //       repeatDelay: 3,
  //       stagger: this.mapStaggerOption(this.staggerOption),
  //     }
  //   );

  //   this.boxDTimeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  //   this.boxDTimeline.fromTo(
  //     boxD,
  //     { opacity: 0, y: -24, scale:0 },
  //     {
  //       scale:1,
  //       opacity: 1,
  //       y: 24,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "elastic.out(1, 0.3)",
  //       delay: 1,
  //       repeatDelay: 3,
  //       stagger: this.mapStaggerOption(this.staggerOption),
  //        onUpdate: () => {
  //     this.updateBoxDColors(boxD); // Update boxD colors during animation
  //   },
  //   to: {
  //     backgroundColor: this.colorPalette[0], // Set a single color from the colorPalette array
  //   },
  //     }
  //   );
  //   // Add hover behavior to the boxD elements
  //   this.addHoverEffectToBoxD(boxD);
  // }

  // setStagger(option: string) {
  //   this.staggerOption = option;

  //   const multimedia = Array.from(
  //     this.elementRef.nativeElement.querySelectorAll(".multimedia")
  //   );
  //   const boxD:HTMLElement[] = Array.from(
  //     this.elementRef.nativeElement.querySelectorAll(".boxD")
  //   );

  //   gsap.killTweensOf(multimedia); // Kill the previous tweens
  //   gsap.killTweensOf(boxD); // Kill the previous tweens

  //   gsap.set(multimedia, { opacity: 0, y: -24 });
  //   gsap.set(boxD, { opacity: 0, y: -24 });

  //   this.multimediaTimeline = gsap.timeline({
  //     defaults: { ease: "power3.inOut" },
  //   });
  //   this.multimediaTimeline.fromTo(
  //     multimedia,
  //     { opacity: 0, y: -24 },
  //     {
  //       opacity: 1,
  //       y: 24,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "elastic.out(1, 0.3)",
  //       delay: 1,
  //       repeatDelay: 3,
  //       stagger: this.mapStaggerOption(option),
  //     }
  //   );

  //   this.boxDTimeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  //   this.boxDTimeline.fromTo(
  //     boxD,
  //     { opacity: 0, y: -24, scale:0,   backgroundColor: "#000000", },
  //     {
  //       scale:1,
  //       opacity: 1,
  //       y: 24,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "elastic.out(1, 0.3)",
  //       delay: 1,
  //       repeatDelay: 3,
  //       stagger: this.mapStaggerOption(option),
  //         onUpdate: () => {
  //     this.updateBoxDColors(boxD); // Update boxD colors during animation
  //   },
  //   to: {
  //     backgroundColor: this.colorPalette[0], // Set a single color from the colorPalette array
  //   },
  //     }
  //   );

  //   // Add hover behavior to the boxD elements
  //   this.addHoverEffectToBoxD(boxD);
  // }

  mapStaggerOption(option: string): any {
    switch (option) {
      case "start":
        return { each: 0.1, from: "start" };
      case "center":
        return { each: 0.1, from: "center" };
      case "end":
        return { each: 0.1, from: "end" };
      case "edges":
        return { each: 0.1, from: "edges" };
      case "random":
        return { each: 0.1, from: "random" };
      case "x":
        return { each: 0.1, from: "x" };
      case "y":
        return { each: 0.1, from: "y" };
      default:
        return undefined;
    }
  }

  generateColorPalette() {
    const hueStep = 360 / 20; // Hue step for 20 colors
    for (let i = 0; i < 20; i++) {
      const hue = Math.floor(i * hueStep); // Calculate hue value
      const color = `hsl(${hue}, 100%, 50%)`; // Convert hue to HSL color
      this.colorPalette.push(color); // Add color to the palette
    }
  }

  updateBoxDColors(boxD: HTMLElement[]) {
    boxD.forEach((box, index) => {
      const color = this.colorPalette[index]; // Get color from colorPalette
      box.style.backgroundColor = color; // Set background color of boxD element
    });
  }
}
