import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {

    getData() {
        let data =
            [{
                name: 'Uttar Pradesh',
                population: 223897418
            }, {
                name: 'Maharashtra',
                population: 123174918
            }, {
                name: 'Bihar',
                population: 119237851
            }, {
                name: 'West Bengal',
                population: 91347736
            }, {
                name: 'Andhra Pradesh',
                population: 84665533
            }, {
                name: 'Madhya Pradesh',
                population: 72597565
            }, {
                name: 'Tamil Nadu',
                population: 79096413
            }, {
                name: 'Rajasthan',
                population: 75984317
            }, {
                name: 'Karnataka',
                population: 61130704
            }, {
                name: 'Gujarat',
                population: 67600992
            }, {
                name: 'Odisha',
                population: 45596577
            }, {
                name: 'Kerala',
                population: 34523726
            }, {
                name: 'Telangana',
                population: 35193978
            }, {
                name: 'Jharkhand',
                population: 32966238
            }, {
                name: 'Assam',
                population: 31169272
            }, {
                name: 'Punjab',
                population: 30045949
            }, {
                name: 'Haryana',
                population: 27761063
            }, {
                name: 'Chhattisgarh',
                population: 25540196
            }, {
                name: 'Jammu and Kashmir',
                population: 14280373
            }, {
                name: 'Uttarakhand',
                population: 10116752
            }, {
                name: 'Himachal Pradesh',
                population: 7123184
            }, {
                name: 'Tripura',
                population: 3671032
            }, {
                name: 'Meghalaya',
                population: 2964007
            }, {
                name: 'Manipur',
                population: 2721756
            }, {
                name: 'Nagaland',
                population: 1980602
            }, {
                name: 'Goa',
                population: 1457723
            }, {
                name: 'Arunachal Pradesh',
                population: 1382611
            }, {
                name: 'Mizoram',
                population: 1091014
            }, {
                name: 'Sikkim',
                population: 607688
            }, {
                name: 'Delhi',
                population: 18686902
            }, {
                name: 'Puducherry',
                population: 1244464
            }, {
                name: 'Chandigarh',
                population: 1054686
            }, {
                name: 'Andaman and Nicobar Islands',
                population: 379944
            }, {
                name: 'Dadra and Nagar Haveli',
                population: 342853
            }, {
                name: 'Daman and Diu',
                population: 242911
            }, {
                name: 'Lakshadweep',
                population: 64429
            }];

        return data;
    }
}