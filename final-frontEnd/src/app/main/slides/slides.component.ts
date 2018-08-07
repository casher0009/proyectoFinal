import { Component, ViewChild, ViewChildren, OnInit, AfterViewInit, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit, AfterViewInit {

  @ViewChild('slider') slider: ElementRef;

  constructor() { }

  ngOnInit() {
  }
 // Initialize Materialize JS
 ngAfterViewInit() {
    // Slider
    const sliderOptions = {
      indicators: false,
      height: 460,
      transition: 440,
      interval: 5500
    };
    M.Slider.init(this.slider.nativeElement, sliderOptions);




 }



}
