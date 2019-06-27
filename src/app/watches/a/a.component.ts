import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  A1 = 'assets/images/01-A.png';
  A2 = 'assets/images/01-B.png';
  A3 = 'assets/images/01-C.png';

  constructor() {}

  ngOnInit() {}
}
