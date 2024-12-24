import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
declare var require: any; // Declare require for dynamic import
const Skrollr = require('skrollr'); 

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit,AfterViewInit, OnDestroy {

  private s : any;
  constructor() { }
  
  ngOnInit(): void {
    Skrollr.init();
  }
  
  ngOnDestroy(): void {
    if (this.s) {
      this.s.destroy();
    }
  }
  ngAfterViewInit(): void {
    this.s = Skrollr.init();
  }

}
