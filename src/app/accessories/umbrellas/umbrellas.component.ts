import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umbrellas',
  templateUrl: './umbrellas.component.html',
  styleUrls: ['./umbrellas.component.css']
})
export class UmbrellasComponent implements OnInit {
  U1 = 'assets/images/gu.png';
  U2 = 'assets/images/bu.png';

  constructor() {}

  ngOnInit() {}
}
