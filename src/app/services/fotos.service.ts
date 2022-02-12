import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl= 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=&start_date=2022-02-07&end_date=2022-02-12';
   }

  getAll(): Promise<any[]>{
   return this.http.get<any[]>(this.baseUrl).toPromise();
  }
}