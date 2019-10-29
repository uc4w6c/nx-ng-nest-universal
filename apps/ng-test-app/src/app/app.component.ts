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
    console.log('AppComponent start')
    const date = new Date().getTime();
    console.log('now:' + date.toString())
    this.helloApiService.getHello()
            .then((hello => {
              this.title = hello + date.toString();
              console.log('title:' + this.title);
            }))
  }

}
