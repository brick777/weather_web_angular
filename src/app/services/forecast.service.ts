import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Forecast} from '../models/forecast';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private baseUrl = 'http://localhost:8080/forecasts';
    private managementUrl = this.baseUrl + '/management';

    constructor(private http: HttpClient) {
    }

    saveForecast(forecast: Forecast): Observable<Forecast> {
        return this.http.put<Forecast>(`${this.managementUrl}`, forecast);
    }

    deleteForecast(id: number): Observable<any> {
        return this.http.delete(`${this.managementUrl}/${id}`);
    }

    getForecastList(windDirectionArray: Array<string>): Observable<Array<Forecast>> {
            return this.http.get<Array<Forecast>>(`${this.baseUrl}?windDirection=${windDirectionArray}`);
    }
}
