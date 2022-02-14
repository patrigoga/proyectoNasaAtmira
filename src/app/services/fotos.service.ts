import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  baseUrl: string;

  baseUrlDetalle: string;

  constructor(private http: HttpClient) {

    this.baseUrl= 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=&start_date=2022-02-08&end_date=2022-02-13';

    this.baseUrlDetalle= 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=';
   }

  getAll(): Promise<any[]>{
   return this.http.get<any[]>(this.baseUrl).toPromise();
  }
  
  getByID(fechaId: string):Promise<any>{
    return this.http.get<any>(`${this.baseUrlDetalle}${fechaId}`).toPromise();
  }

  getDetalle(fechaId2:string): Promise<any>{
    return this.http.get<any>(`${this.baseUrlDetalle}${fechaId2}`).toPromise();
   }



  
}
