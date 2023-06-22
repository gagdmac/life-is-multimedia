import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-graphic-design-component",
  templateUrl: "./graphic-design-component.component.html",
})
export class GraphicDesignComponentComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
