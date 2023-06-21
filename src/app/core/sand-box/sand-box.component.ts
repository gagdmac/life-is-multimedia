import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-sand-box",
  templateUrl: "./sand-box.component.html",
})
export class SandBoxComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
