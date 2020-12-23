import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSummary(): Promise<JSON> {
    const url = "https://api.covid19api.com/summary";
    return this.http.get<JSON>(url).toPromise();
  }
  getDataforCountry(country:string): Promise<JSON[]> {
    const url = "https://api.covid19api.com/country/" +country +"/status/confirmed";
    return this.http.get<JSON[]>(url).toPromise();
  }
  getAllDataforCountry(country:string): Promise<JSON[]> {
    const url = "https://api.covid19api.com/dayone/country/" +country;
    return this.http.get<JSON[]>(url).toPromise();
  }
  getAllCountries(): Promise<JSON[]> {
    const url = "https://api.covid19api.com/countries";
    return this.http.get<JSON[]>(url).toPromise();
  }
  
  getUserIP(): Promise<JSON>{
    const url = "https://ip.seeip.org/geoip";
    return this.http.get<JSON>(url).toPromise();
  }
  
}
