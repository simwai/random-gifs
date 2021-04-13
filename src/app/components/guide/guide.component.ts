import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
  host: {
    class: 'h-100'
  }
})
export class GuideComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
