import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {
  T1 = 'assets/images/T-27.png';
  T2 = 'assets/images/T-42.png';

  constructor() {}

  ngOnInit() {}
}
