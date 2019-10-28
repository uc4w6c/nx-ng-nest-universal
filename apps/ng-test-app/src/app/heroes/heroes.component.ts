import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-test-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
    console.log('heroes start')
    this.hero = 'SSR test'
  }

}
