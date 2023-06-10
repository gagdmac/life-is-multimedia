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
  colorPalette: string[] = []; // Color palette property


  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    gsap.set(".multimedia", { opacity: 0 });
    gsap.set(".boxD", { opacity: 0 });
    this.generateColorPalette(); // Generate color palette

  }
  

  // Method to add hover behavior to the boxD elements
  addHoverEffectToBoxD(boxD: HTMLElement[]) {
    boxD.forEach((element: HTMLElement) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {  duration: 0.2, rotate: 180 });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(element, {  duration: 0.2, rotate: -180 });
      });
    });
  }

ngAfterViewInit() {

  // const svgElement = gsap.utils.selector("#mano-raton");
  // gsap.to("#mano-raton", { rotate: 10,x:2, y:-4, duration: .5, repeat:-1, yoyo:true });
  
  const svgElement = gsap.utils.selector("#click-raton");
  gsap.to("#click-raton", { opacity:0 });

  const multimedia: HTMLElement[] = Array.from(
    this.elementRef.nativeElement.querySelectorAll(".multimedia")
  );
  const boxD: HTMLElement[] = this.initializeElements(".boxD");

  this.multimediaTimeline = this.createTimeline(multimedia, this.staggerOption);
  this.boxDTimeline = this.createTimeline(boxD, this.staggerOption);

  // Add hover behavior to the boxD elements
  this.addHoverEffectToBoxD(boxD);
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
          ease: "power1.inOut"
        });

        // Set opacity 1 to the click element
        gsap.set(clickElement, {
          opacity: 1
        });

        // Fade out the click element after 1 second
        gsap.to(clickElement, {
          opacity: 0,
          duration: 0.2,
          delay: .1,
          ease: "power1.inOut"
        });
      }
    });
}

private initializeElements(selector: string): HTMLElement[] {
  return Array.from(
    this.elementRef.nativeElement.querySelectorAll(selector)
  );
}

private createTimeline(elements: HTMLElement[], staggerOption: string): gsap.core.Timeline {
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