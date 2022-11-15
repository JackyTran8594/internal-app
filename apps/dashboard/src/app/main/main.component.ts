import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Weather } from './service/main';
import { MainService } from './service/main.service';

@Component({
  selector: 'internal-app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;

  constructor(private service: MainService) {}

  public listData!: Weather;

  ngOnInit(): void {
    // console.log('on init');
    // this.getChart();
    this.getData();
  }

  public async getData() {
    this.listData = await this.service.getWeatherToPromise();
    console.log(this.listData);
    await this.getChart();
    // this.service.getWeather().subscribe({
    //   next: (res) => {
    //     // console.log(this.listData);
    //     console.log('1');
    //     this.listData = res;
    //     console.log(this.listData);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  getChart() {
    // console.log('2');
    this.chartOptions = {
      xAxis: {
        crosshair: true,
        categories: [
          this.listData.forecast.forecastday[0].date,
          this.listData.forecast.forecastday[0 + 1].date,
          this.listData.forecast.forecastday[0 + 1 + 1].date,
        ],
        accessibility: {
          description: 'Days',
        },
      },
      yAxis: {
        crosshair: true,
        title: {
          text: 'Temperature',
        },
        // labels: {
        //   formatter: function () {
        //     return this.value + '°';
        //   },
        // },
      },
      title: {
        text: 'Average Temperature in Days',
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1,
          },
        },
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          name: '°C Max',
          type: 'line',
          marker: {
            symbol: 'square',
          },
          data: [
            this.listData.forecast.forecastday[0].day.maxtemp_c,
            this.listData.forecast.forecastday[0 + 1].day.maxtemp_c,
            this.listData.forecast.forecastday[0 + 1 + 1].day.maxtemp_c,
          ],
        },

        {
          name: '°C Average',
          type: 'line',
          marker: {
            symbol: 'diamond',
          },
          data: [
            this.listData.forecast.forecastday[0].day.avgtemp_c,
            this.listData.forecast.forecastday[0 + 1].day.avgtemp_c,
            this.listData.forecast.forecastday[0 + 1 + 1].day.avgtemp_c,
          ],
        },

        {
          name: '°C Min',
          type: 'line',
          marker: {
            symbol: 'spade',
          },
          data: [
            this.listData.forecast.forecastday[0].day.mintemp_c,
            this.listData.forecast.forecastday[0 + 1].day.mintemp_c,
            this.listData.forecast.forecastday[0 + 1 + 1].day.mintemp_c,
          ],
        },
      ],
    };
  }
}
