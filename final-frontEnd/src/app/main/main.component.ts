import { Component, ViewChild, ViewChildren, OnInit, AfterViewInit, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit{

    // Access document elements
    @ViewChild('sidenav') sidenav: ElementRef;
    @ViewChild('slider') slider: ElementRef;
    @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;
    @ViewChildren('scrollspy') scrollspy: QueryList<ElementRef>;
  
  constructor() { }

  ngOnInit() {
  }

  // Initialize Materialize JS
  ngAfterViewInit() {

    // Sidena
    M.Sidenav.init(this.sidenav.nativeElement);

    // Material Box
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));

    // Scrollspy
    const spyArray = this.scrollspy.toArray();
    spyArray.forEach((spy) => M.ScrollSpy.init(spy.nativeElement));

  }

}
