import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service'
import { ToastController } from '@ionic/angular';
import { GoogleChartInterface } from 'ng2-google-charts/ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';


declare const google: any
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public overall;
  public first;
  public second;
  public third;
  public data_sorted;
  public all_countries;
  public all_countries_for_search;
  public AllCasesMap: GoogleChartInterface;
  public NewCasesMap: GoogleChartInterface;

  public AllCasesChart;
  public NewCasesChart;
  public CasesChartLineFR;

  public CasesAddedCases;
  public dataCountry_DE;
  public dataCountry_FR;
  public CasesChartColumn;
  public dataCountry_Colum;

  public dataMap_All;
  public data_sorted_all;
  public data_sorted_all_new;
  public data_sorted_all_country;
  public data_sorted_new_country;
  public dataCountry_Added_Cases;
  public dataMap_New;
  public dataForTable;
  public showmore;
  public columns: any;
  public rows: any;
  public columnst: any;
  public rowst: any;
  public i = 1;
  public user = "";
  public selected_country = "Spain";
  constructor(
    private loadingController: LoadingController,
    private dataService: DataService,
    private toastController: ToastController


  ) {

    this.overall = "";
    this.first = "";
    this.second = "";
    this.third = "";

    this.dataMap_New = [
      ['Country', 'Cases'],
    ];

    this.dataMap_All = [
      ['Country', 'Cases'],
    ];

    this.dataMap_All = [
      ['Country', 'Cases'],
    ];

    this.dataCountry_DE = [
      ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
    ];

    this.dataCountry_FR = [
      ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
    ];

    this.dataCountry_Colum = [
      ['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases'],
    ];

    this.data_sorted_all_country = [
      ['Country', 'Cases'],
    ];

    this.dataCountry_Added_Cases = [
      ['Date', 'Added Cases'],
    ];
    this.CasesChartColumn = [
      ['Country', 'Cases'],
    ]

    this.data_sorted_new_country = [
      ['Country', 'Cases'],
    ];

    this.overall = "";
    this.dataForTable = [];
    this.data_sorted = [];
    this.all_countries_for_search = [];


    this.columns = [
      { prop: 'Index' },
      { prop: 'CountryCode' },
      { prop: 'Country' },
      { prop: 'NewDeaths' },
      { prop: 'NewConfirmed' },
      { prop: 'NewRecovered' },
      { prop: 'AllDeaths' },
      { prop: 'AllConfirmed' },
      { prop: 'AllRecovered' }
    ];
    this.showmore == false;
    this.dataService.getUserIP().then(res => {
      console.log(res);
      this.user = res['country'];

      this.selected_country = this.user;
      console.log(this.selected_country);
    })
  }
  //Array to fill the Dropdown List
  public dropdownOptionsNewCases = [
    { id: "005", val: 'South America' },
    { id: "013", val: 'Central America' },
    { id: "021", val: 'North America' },
    { id: "150", val: 'Europe' },
    { id: "002", val: 'Africa' },
    { id: "142", val: 'Asia' },
    { id: "009", val: 'Oceania' },
  ];

  public dropdownOptionsAllCases = [
    { id: "005", val: 'South America' },
    { id: "013", val: 'Central America' },
    { id: "021", val: 'North America' },
    { id: "150", val: 'Europe' },
    { id: "002", val: 'Africa' },
    { id: "142", val: 'Asia' },
    { id: "009", val: 'Oceania' },
  ];

  public dropdownOptionsCountry = []
  public dropdownOptionsCountryColumn = []
  public dropdownOptionsAddedCases = []

  public dropdownFunctionNewCases($event) {
    console.log($event.detail.value);
    this.NewCasesMap.dataTable = this.dataMap_New;
    this.NewCasesMap.options.region = $event.detail.value.toString();
    this.NewCasesMap.component.draw();
  }

  public dropdownFunctionAllCases($event) {
    console.log($event.detail.value);
    this.AllCasesMap.dataTable = this.dataMap_All;
    this.AllCasesMap.options.region = $event.detail.value.toString();
    this.AllCasesMap.component.draw();
  }

  public dropdownFunctionCountry($event) {
    document.getElementById('error_country_select').style.visibility = "visible";
    document.getElementById('no_data_country').style.visibility = "hidden";
    this.selected_country = $event.detail.value;
    this.dataCountry_FR = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
    this.dataService.getAllDataforCountry($event.detail.value).then(res => {
      res.forEach((element, index) => {
        if (index != 0) {
          this.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed']]);
        } else {
          console.log("first");
        }
      });
    }).then(res => {
      this.CasesChartLineFR.dataTable = this.dataCountry_FR;
      this.CasesChartLineFR.component.draw();
    })
  }

  public dropdownFunctionCountryAddedCases($event) {
    this.selected_country = $event.detail.value;
    this.dataCountry_Added_Cases = [['Date', 'Added Cases']];
    this.dataService.getAllDataforCountry($event.detail.value).then(res => {
      res.forEach((element, index) => {
        if (index != 0) {
          let t = (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed'];
          if (t < 0) {
            this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
          } else {
            this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
          }
        }
      });
    }).then(res => {
      this.CasesAddedCases.dataTable = this.dataCountry_Added_Cases;
      this.CasesAddedCases.component.draw();
    })
  }

  public dropdownFunctionCountryColumn($event) {
    document.getElementById('error_country_select').style.visibility = "visible";
    document.getElementById('no_data_country').style.visibility = "hidden";

    this.selected_country = $event.detail.value;
    this.dataCountry_Colum = [['Date', 'Cases', 'Deaths', 'Recovered', 'Added Cases']];
    this.dataService.getAllDataforCountry($event.detail.value).then(res => {
      res.forEach((element, index) => {
        this.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (res[index - 1]['Confirmed'] * -1) + res[index]['Confirmed']]);
      });
    }).then(res => {
      this.CasesChartColumn.dataTable = this.dataCountry_Colum;
      this.CasesChartColumn.component.draw();
    })
  }

  public error(event: ChartErrorEvent) {
    console.log(event);
    // document.getElementById('error_country_select').style.visibility = "hidden";
    //  document.getElementById('no_data_country').style.visibility = "visible";
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 100);
  }
  showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
  }

  ngOnInit() {
    let loading: HTMLIonLoadingElement;
    this.loadingController.create({
      message: 'Lade Daten...',
    }).then(res => {
      loading = res;
      loading.present();

      this.dataService.getSummary().then(dataRes => {
        this.overall = dataRes['Global'];
        this.data_sorted = dataRes['Countries'].sort(this.sortByProperty("NewConfirmed"));
        this.data_sorted_all_new = dataRes['Countries'].sort((a, b) => b.NewConfirmed - a.NewConfirmed);
        this.data_sorted_all = dataRes['Countries'].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        this.data_sorted.forEach(element => {
          this.dataMap_All.push([element.CountryCode.toString(), element.TotalConfirmed]);
          this.dataMap_New.push([element.CountryCode.toString(), element.NewConfirmed]);
          this.dataForTable.push({
            Index: this.i,
            CountryCode: element.CountryCode,
            Country: element.Country,
            NewDeaths: element.NewDeaths,
            NewConfirmed: element.NewConfirmed,
            NewRecovered: element.NewRecovered,
            AllDeaths: element.TotalDeaths,
            AllConfirmed: element.TotalConfirmed,
            AllRecovered: element.TotalRecovered,
          })
          this.i++;
        });

        this.data_sorted_all.forEach(element => {
          this.data_sorted_all_country.push([element.CountryCode.toString(), element.TotalConfirmed]);
        });
        this.data_sorted_all_new.forEach(element => {
          this.data_sorted_new_country.push([element.CountryCode.toString(), element.NewConfirmed]);
        });

        this.first = this.data_sorted_all_new[0];
        this.second = this.data_sorted_all_new[1];
        this.third = this.data_sorted_all_new[2];

        this.overall.NewConfirmed = this.overall.NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.overall.NewDeaths = this.overall.NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.overall.NewRecovered = this.overall.NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.overall.TotalConfirmed = this.overall.TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.overall.TotalDeaths = this.overall.TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.overall.TotalRecovered = this.overall.TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

        this.first.NewConfirmed = this.data_sorted_all_new[0].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.first.NewDeaths = this.data_sorted_all_new[0].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.first.NewRecovered = this.data_sorted_all_new[0].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.first.TotalConfirmed = this.data_sorted_all_new[0].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.first.TotalDeaths = this.data_sorted_all_new[0].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.first.TotalRecovered = this.data_sorted_all_new[0].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

        this.second.NewConfirmed = this.data_sorted_all_new[1].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.second.NewDeaths = this.data_sorted_all_new[1].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.second.NewRecovered = this.data_sorted_all_new[1].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.second.TotalConfirmed = this.data_sorted_all_new[1].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.second.TotalDeaths = this.data_sorted_all_new[1].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.second.TotalRecovered = this.data_sorted_all_new[1].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

        this.third.NewConfirmed = this.data_sorted_all_new[2].NewConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.third.NewDeaths = this.data_sorted_all_new[2].NewDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.third.NewRecovered = this.data_sorted_all_new[2].NewRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.third.TotalConfirmed = this.data_sorted_all_new[2].TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.third.TotalDeaths = this.data_sorted_all_new[2].TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        this.third.TotalRecovered = this.data_sorted_all_new[2].TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }).then(res => {
        this.dataService.getSummary().then(dataRes2 => {
          this.all_countries = dataRes2['Countries'].sort(this.sortByProperty("NewConfirmed"));
          this.all_countries_for_search = dataRes2['Countries'].sort(this.sortByProperty("NewConfirmed"));
        });
      }).then(res => {
        this.dataService.getAllCountries().then(allCountries => {
          let temp = allCountries;
          temp.sort((a, b) => (a['Country'] > b['Country']) ? 1 : -1);
          temp.forEach(element => {
            this.dropdownOptionsCountry.push({ id: element['Slug'], val: element['Country'] },);
            this.dropdownOptionsCountryColumn.push({ id: element['Slug'], val: element['Country'] },);
            this.dropdownOptionsAddedCases.push({ id: element['Slug'], val: element['Country'] },);
          });
        })
      }).then(res => {
        console.log(this.user);
        this.dataService.getAllDataforCountry('germany').then(dataC => {
          dataC.forEach((element, index) => {
            if (index != 0) {
              this.dataCountry_FR.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed']]);
              this.dataCountry_Colum.push([element['Date'].toString().split("T", 1)[0], element['Confirmed'], element['Deaths'], element['Recovered'], (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed']]);
              let t = (dataC[index - 1]['Confirmed'] * -1) + dataC[index]['Confirmed'];
              if (t < 0) {
                this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], 0]);
              } else {
                this.dataCountry_Added_Cases.push([element['Date'].toString().split("T", 1)[0], t]);
              }
            }
          });
        })
      }).then(res => {
        this.useAngularLibrary(loading);
      })
    })
  }



  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    this.all_countries = this.all_countries_for_search;
    if (val.trim() !== '') {
      this.all_countries = this.all_countries.filter(term => {
        return term['Country'].toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }
  sortByProperty(property) {
    return function (a, b) {
      if (a[property] < b[property])
        return 1;
      else if (a[property] > b[property])
        return -1;

      return 0;
    }
  }

  useAngularLibrary(loading: HTMLIonLoadingElement) {
    //Geocharts
    this.NewCasesMap = {
      chartType: 'GeoChart',
      dataTable: this.dataMap_New,
      options: {
        'title': 'Map of New Confirmed Cases',
        'region': 'world',
      }
    };

    this.AllCasesMap = {
      chartType: 'GeoChart',
      dataTable: this.dataMap_All,
      options: {
        'title': 'Map of All Confirmed Cases',
        'region': 'world',
      }
    };
    //Piecharts
    this.NewCasesChart = {
      chartType: 'PieChart',
      dataTable: this.data_sorted_new_country,
      options: {
        height: 600,
        'legend': 'none',
      }
    };

    this.AllCasesChart = {
      chartType: 'PieChart',
      dataTable: this.data_sorted_all_country,
      options: {
        height: 600,
        'legend': 'none',
      }
    };


    this.CasesChartLineFR = {
      chartType: 'LineChart',
      dataTable: this.dataCountry_FR,
      options: {
        height: 600,
      }
    };

    //ColumnCharts
    this.CasesChartColumn = {
      chartType: 'ColumnChart',
      dataTable: this.dataCountry_Colum,
      options: {
        height: 600,
        isStacked: true,
      },
    }

    this.CasesAddedCases = {
      chartType: 'LineChart',
      dataTable: this.dataCountry_Added_Cases,
      options: {
        height: 600,
        isStacked: true,
      },
    }
    loading.dismiss();
  }

  closeNoti() {
    document.getElementById('noti').style.opacity = "0.0";
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error while fetching the data.',
      duration: 2000
    });
    toast.present();
  }
}
