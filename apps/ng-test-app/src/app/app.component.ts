import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloApiService } from './hello-api.service';

@Component({
  selector: 'ss-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string;
  // title = 'ng-test-app';

  constructor(private http: HttpClient,
      private helloApiService: HelloApiService) {}

  ngOnInit(): void {
    console.log('AppComponent start')
    const date = new Date().getTime();
    console.log('now:' + date.toString())
    this.http
      .get<HelloResponse>('http://localhost:4000/api')
      .subscribe(data => {
        const helloResponse = data;
        console.log(helloResponse.message);
        this.title = helloResponse.message;
        console.log('title:' + this.title);
    });

    /*
    this.helloApiService.getHello()
            .then((hello => {
              this.title = hello + date.toString();
              console.log('title:' + this.title);
            }))
    */
  }

}

interface HelloResponse {
  message: string;
}
