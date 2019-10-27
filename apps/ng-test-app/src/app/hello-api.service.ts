import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HelloApiService {
  private helloUrl = 'http://localhost:4000/api';  // Web APIのURL

  constructor(
    private http: HttpClient) { }

  async getHello(): Promise<string> {
    let message: string;

    const userApi = axios.create();
    await userApi.get<HelloResponse>(this.helloUrl)
            .then(hello => {
              const helloResponse: HelloResponse = hello.data;
              message = helloResponse.message;
            });
    return message;
  }
}

// プロパティ: レスポンスの形をinterfaceに定義
export interface HelloResponse {
  message: string;
}
