import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k',
  templateUrl: './k.component.html',
  styleUrls: ['./k.component.css']
})
export class KComponent implements OnInit {
  K1 = 'assets/images/K-31.png';
  K2 = 'assets/images/K-31-O.png';
  K3 = 'assets/images/K-100.png';

  constructor() {}

  ngOnInit() {}
}
