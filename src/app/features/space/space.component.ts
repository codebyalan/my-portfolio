import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  details: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails(str: string) {
    if(str=='exp'){
      console.log("Experience")
      this.details = true
    }
  }

}
