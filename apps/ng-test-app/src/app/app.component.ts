import { Component } from '@angular/core';
import { HelloApiService } from './hello-api.service';

@Component({
  selector: 'ss-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test-app';

  constructor(private helloApiService: HelloApiService) {}

  ngOnInit(): void {
    this.helloApiService.getHello()
            .then((hello => {
              this.title = hello;
              console.log('title:' + this.title);
            }))
  }

}
