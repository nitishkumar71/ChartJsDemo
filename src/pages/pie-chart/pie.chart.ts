import { Component, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { PieChartService } from './pie.chart.service';

@Component({
    selector: 'pie-chart',
    templateUrl: './pie.chart.html',
    providers: [PieChartService]
})
export class PieChartPage implements OnInit {
    @ViewChild('piechart') pieChart: any;
    constructor(private _pieChartService: PieChartService) {
    }

    ngOnInit(): void {
        let ctx = this.pieChart.nativeElement.getContext('2d');
        let labels = new Array<string>();
        let population = new Array<number>();

        this._pieChartService.getData()
            .filter((state) => {
                labels.push(state.name);
                population.push(state.population);
            });

        let pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'State wise Population in India (2017)',
                    data: population,
                    backgroundColor: this.createBackgroundColorArray(),
                    borderWidth: 1
                }]
            }
        });
    }

    // create an array of background color for all states
    createBackgroundColorArray() {
        let colorPool = new Array<string>();
        this._pieChartService.getData().forEach(() => {
            colorPool.push(this.dynamicColors());
        });
        return colorPool;
    }

    // method to generate dynamic colors
    dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

}