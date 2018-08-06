<<<<<<< HEAD
import { Component, ViewChild, ViewChildren, OnInit, AfterViewInit, ElementRef, QueryList } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> e592550f6696f99191174900e1e3d6e4fa68d685

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
<<<<<<< HEAD
export class MainComponent implements OnInit, AfterViewInit{

    // Access document elements
    @ViewChild('sidenav') sidenav: ElementRef;
    @ViewChild('slider') slider: ElementRef;
    @ViewChild('autocomplete') autocomplete: ElementRef;
    @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;
    @ViewChildren('scrollspy') scrollspy: QueryList<ElementRef>;
  
=======
export class MainComponent implements OnInit {

>>>>>>> e592550f6696f99191174900e1e3d6e4fa68d685
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  // Initialize Materialize JS
  ngAfterViewInit() {

    // Sidena
    M.Sidenav.init(this.sidenav.nativeElement);

    // Slider
    const sliderOptions = {
      indicators: false,
      height: 460,
      transition: 440,
      interval: 5500
    };
    M.Slider.init(this.slider.nativeElement, sliderOptions);

    // Material Box
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));

    // Scrollspy
    const spyArray = this.scrollspy.toArray();
    spyArray.forEach((spy) => M.ScrollSpy.init(spy.nativeElement));

  }

=======
>>>>>>> e592550f6696f99191174900e1e3d6e4fa68d685
}
