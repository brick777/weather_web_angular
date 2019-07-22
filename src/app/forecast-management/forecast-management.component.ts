import {Component, OnInit} from '@angular/core';
import {Forecast} from '../models/forecast';
import {ForecastService} from '../services/forecast.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-forecast-management',
    templateUrl: './forecast-management.component.html',
    styleUrls: ['./forecast-management.component.css']
})

export class ForecastManagementComponent implements OnInit {
    forecastList: Array<Forecast> = [];
    forecast: Forecast;

    constructor(private route: ActivatedRoute, private router: Router, private forecastService: ForecastService, private authentcationService: AuthenticationService) {
        this.forecast = new Forecast();
    }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.forecastService.getForecastList(['WEST', 'NORTH', 'EAST', 'SOUTH']).subscribe(
            result => {
                this.forecastList = result;
            },
            err => console.error(err));
    }

    saveRecord() {
        if (this.validate()) {
            this.forecastService.saveForecast(this.forecast).subscribe(
                result => this.reloadData(),
                err  => {
                    if (err) {
                        alert('Can\'t save record. Check if forecast for specific day are exists');
                        console.warn('Can\'t save records');
                    }
                });
        } else {
            alert('Forecast information are not corrected.');
            console.error('Can\'t save record');
        }
    }

    deleteRecord(forecast: Forecast) {
        if (confirm('Are you sure to delete this record?')) {
            this.forecastService.deleteForecast(forecast.id).subscribe(
                result => this.reloadData(),
                err => console.error(err));
        }
    }

    logout() {
        this.authentcationService.logout();
        window.location.reload();
    }

    validate(): boolean {
        if (this.forecast.temperature === undefined) {
            return false;
        }
        if (this.forecast.date === undefined) {
            return false;
        }

        return true;
    }
}
