import { Component, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'bar-chart',
    templateUrl: 'bar.chart.html'
})
export class BarChartPage implements OnInit {
    @ViewChild('barchart') barchart: any;

    ngOnInit(): void {
        console.log(this.barchart.nativeElement);
        let ctx = this.barchart.nativeElement.getContext('2d');
        let barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["2000", "2005", "2010", "2015", "2016", "2017"],
                datasets: [{
                    label: 'Yearly % Change in India\'s Population',
                    data: [1.20, 1.20, 1.27, 1.47, 1.67, 1.86],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
