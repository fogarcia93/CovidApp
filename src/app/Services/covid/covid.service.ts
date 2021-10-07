import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.URL_Covid_RestApi;
  }

  getTopTenCasesByRegion(){
    const url = this.url + '/api/covid/get-top-cases-by-region';
    return this.http.get(url);
  }

  getTopTenCasesByProvince(region: string, iso: string){
    const url = this.url + '/api/covid/get-top-cases-by-province?region='+ region+'&iso='+iso;
    return this.http.get(url);
  }
}
