import {Component, OnInit} from '@angular/core';
import {ForecastService} from '../services/forecast.service';
import {Forecast} from '../models/forecast';

@Component({
    selector: 'app-forecast-view',
    templateUrl: './forecast-view.component.html',
    styleUrls: ['./forecast-view.component.css']
})
export class ForecastViewComponent implements OnInit {

    forecastList: Array<Forecast> = [];
    today: number = Date.now();

    west = true;
    north = true;
    east = true;
    south = true;

    constructor(private forecastService: ForecastService) {
    }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        const windDirectionArray = this.getCheckedWindDirectionArray();
        this.forecastService.getForecastList(windDirectionArray).subscribe(
            data => this.forecastList = data,
            err => console.error(err));
    }

    getCheckedWindDirectionArray(): Array<string> {
        const windDirectionArray: Array<string> = [];

        if (this.west) {
            windDirectionArray.push('WEST');
        }

        if (this.north) {
            windDirectionArray.push('NORTH');
        }

        if (this.east) {
            windDirectionArray.push('EAST');
        }

        if (this.south) {
            windDirectionArray.push('SOUTH');
        }

        return windDirectionArray;
    }

    onChange(ev) {
        this.setWindDirectionValues(ev);
        this.reloadData();
    }

    setWindDirectionValues(ev) {
        switch (ev.currentTarget.defaultValue) {
            case 'WEST':
                this.west = ev.currentTarget.checked;
                break;
            case 'EAST':
                this.east = ev.currentTarget.checked;
                break;
            case 'NORTH':
                this.north = ev.currentTarget.checked;
                break;
            case 'SOUTH':
                this.south = ev.currentTarget.checked;
                break;
        }
    }
}
