import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
declare var require: any; // Declare require for dynamic import
const Skrollr = require('skrollr'); // Import Skrollr dynamically

declare var skrollr: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit,AfterViewInit, OnDestroy {

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
