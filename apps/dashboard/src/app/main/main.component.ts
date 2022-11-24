import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Weather } from './service/main';
import { MainService } from './service/main.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ShareService } from '@internal-app/theme';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}

@Component({
  selector: 'internal-app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chardata: unknown[] = [];
  chartOptions: unknown;
  popupStatus = true;
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];
  public isCollapsed: boolean;

  constructor(
    private service: MainService,
    private shareService: ShareService,
    // @Inject(DOCUMENT) private document: Document,
    private element: ElementRef,
    private renderer2: Renderer2
  ) {
    this.isCollapsed = false;
  }

  public navbarCollapsed = true;
  public listData!: Weather;
  public changeIcon = false;
  offsetFlag = false;
  public isNavOpen = false;
  public scrollSection = false;

  ngOnInit(): void {
    // console.log('on init');
    // this.getChart();
    this.getData();
    this.openForm();
    this.closeForm();
    this.toggleSidebar();

    this.renderer2.listen('document', 'scroll', (event) => {
      this.getScrollHeight();
    });

    this.renderer2.listen('document', 'scroll', (event) => {
      scroll;
    });
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

  // @HostListener('window:scroll', ['$event'])

  getScrollHeight() {
    // console.log(window.pageYOffset, event);
    if (window.pageYOffset < 300) this.offsetFlag = false;
    else this.offsetFlag = true;
    console.log(this.offsetFlag);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const revealElement = (
      this.element.nativeElement as HTMLElement
    ).querySelectorAll('.reveal');

    const arrLength = revealElement.length;
    for (let i = 0; i < arrLength; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElement[i].getBoundingClientRect().top;

      if (elementTop < windowHeight - 200) {
        revealElement[i].classList.add('active');
      }
      // else {
      //   revealElement[i].classList.remove('active');
      // }
    }

    // const revealElement = this.element.nativeElement.querySelector('.reveal');
    // console.log(revealElement);
  }

  toggleSidebar() {
    this.isNavOpen = !this.isNavOpen;
    console.log(this.isNavOpen);
  }

  openForm() {
    // console.log(this.popup);
    if (this.changeIcon == false) {
      this.changeIcon = true;
    }
  }

  closeForm() {
    if (this.changeIcon == true) {
      this.changeIcon = false;
    }
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`,
      },
    ];
    this.i++;
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
        // text: 'Average Temperature in Days',
        text: '',
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
            symbol: 'triangle',
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
