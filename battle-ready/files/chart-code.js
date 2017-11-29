function buildChart() {
  if ($('#timber-chart').length){
    Highcharts.chart('timber-chart', {
        chart: {
            events: {
              //  load: addCalloutBubbles
             },
            type: 'column',
            style: {
              // color: '#ffffff',
            }
        },
        legend: {
          enabled: true,
        },
        title: {
            text: 'Northwest Timber Harvests by Decade'
        },
        xAxis: {
            categories: ['1900-09', '1910-09', '1920-09', '1930-09', '1940-09', '1950-09', '1960-09', '1970-09', '1980-09', '1990-09', '2000-09', '2010-05'],
            // categories: ['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billion board feet'
            }
            // opposite: true,
            // labels: {
            //     formatter: function () {
            //         return this.value / 1000;
            //     }
            // }
        },
        // tooltip: {
        // 	borderColor: 'none',
        //   formatter: function() {
        //    return '<b>'+ this.series.name +'</b> harvested '+ Math.round(this.y) + ' billion board feet in ' + this.x ;
        //   }
        // },
        tooltip: {
                    formatter: function() {
                        var s = '<b>'+ this.x +'</b>',
                            sum = 0;
                        $.each(this.points, function(i, point) {
                            s += '<br/>'+ point.series.name +': '+
                                Math.round(point.y) + ' billion board feet';
                            sum += point.y;
                        });
                        s += '<br/>Total: ' + Math.round(sum) + ' billion board feet'
                        return s;
                    },
                    shared: true
                },
        plotOptions: {
            column: {
              // stacking: 'normal',
              style: {
              }
            },
            series: {
              marker: {
                enabled: false,
              }
            },
            area: {
                stacking: 'normal',
                lineColor: 'rgba(98,121,107, 0.2)',
                // lineOpacity: 0.25,
                marker: {
                    fillOpacity: 0,
                    lineWidth: 0,
                    lineColor: '#62796b'
                }
            }
        },
        series: [{
            name: 'Washington',
            color: '#62796b',
            // pointWidth: 5,
            marker: {
              symbol: 'circle',
            },
            data: [26.696, 41.787, 62.302, 40.23, 43.443, 43.300451, 56.374302, 68.208815, 61.149805, 48.334547, 34.38161, 17.664862]
            // data: [1.859, 1.859, 1.859, 1.859, 1.859, 2.485, 3.917, 4.305, 3.778, 2.916, 3.863, 4.097, 4.064, 4.1, 4.592, 3.946, 3.726, 4.493, 4.304, 4.602, 4.961, 5.525, 3.832, 5.835, 6.678, 6.267, 7.027, 7.546, 7.326, 7.305, 7.302, 5.502, 3.908, 2.261, 3.106, 3.064, 3.453, 4.572, 3.713, 3.349, 4.244, 4.574, 5.144, 4.929, 4.633, 4.524, 3.384, 3.829, 4.068, 4.114, 3.850528, 4.457797, 4.677903, 4.232774, 4.419481, 4.050894, 4.6506, 5.035002, 4.045901, 3.879571, 4.86881, 4.726788, 4.435728, 5.051344, 5.427711, 6.361419, 6.521775, 6.075394, 5.936417, 6.968916, 7.003817, 6.459871, 6.45053, 7.079521, 7.809396, 6.876271, 6.185051, 6.970694, 6.590985, 6.782679, 6.969265, 5.719952, 4.890898, 5.079064, 6.088273, 5.801972, 5.963543, 6.555957, 7.035509, 7.045372, 6.850946, 5.849227, 5.10392, 5.017676, 4.329979, 4.15593, 4.392523, 4.366287, 4.246487, 4.021572, 4.382779, 4.176568, 3.58207, 3.319778, 3.786329, 3.570581, 3.323853, 3.264253, 2.758088, 2.217311, 2.739185, 2.984953, 2.739672, 3.179846, 3.205868, 2.81533 ]
        },{
            name: 'Oregon',
            color: '#92ab84',
            // pointWidth: 5,
            // enableMouseTracking: false,
            marker: {
              symbol: 'circle',
              enabled: false,
            },
            data: [12.399, 21.40533333, 35.26133333, 32.94033333, 69.86966667, 87.0043, 87.633575, 83.48810633, 74.84424267, 47.86589733, 38.48633333, 22.61077906]
            // data: [0.77, 0.819, 0.903, 0.987, 1.079, 1.285, 1.501333333, 1.569666667, 1.667666667, 1.817333333, 1.929333333, 1.935, 1.939333333, 1.944, 1.807333333, 1.848666667, 2.071333333, 2.472333333, 2.590666667, 2.867333333, 2.638333333, 2.787333333, 3.004, 3.552, 3.821333333, 3.792, 3.821666667, 3.878666667, 4.096, 3.87, 3.288, 2.265666667, 1.975333333, 2.097, 2.699333333, 3.322666667, 4.016, 4.186, 4.435666667, 4.654666667, 5.682666667, 6.313333333, 6.920333333, 7.056666667, 6.833, 6.639666667, 6.952666667, 7.735666667, 7.827333333, 7.908333333, 8.011666667, 8.987333333, 9.031333333, 9.098333333, 9.067333333, 9.317333333, 8.870433333, 8.203766667,8.071766667, 8.345, 8.247, 8.1, 8.197, 8.864666667, 9.162666667, 9.203898333, 8.850303, 8.966557, 9.083452, 8.958031333, 8.719667667, 8.879419, 9.340645, 9.118555, 8.365585333, 7.959879, 7.798208, 8.006858333, 7.855801, 7.443488, 6.676314333, 6.030835333, 6.305681667, 6.923884333, 7.713668667, 8.139880667, 8.361721333, 8.524321333, 8.416746, 7.751189, 6.906256, 6.013743667, 5.705528, 5.067831333, 4.588430333, 4.131441333, 4.102, 3.845, 3.790666667, 3.715, 3.684333333, 3.738666667, 3.788, 4.125, 4.269333333, 4.378, 4.160667, 3.842333, 3.4, 3.1, 3.1, 3.6491303, 3.74878876, 4.199202, 4.125608, 3.78805]
        }]
    });
    function addCalloutBubbles() {
      this.series[0].points[57].update({
        dataLabels: {
          enabled: true,
          format: 'Oregon',
          align: 'left',
          verticalAlign: 'middle',
          style: {
            color: '#333',
          },
          y: 120
        }
      });
      this.series[0].points[56].update({
        dataLabels: {
          enabled: true,
          format: 'Washington',
          align: 'left',
          verticalAlign: 'middle',
          style: {
            color: '#333',
          },
          y: 35
        }
      });
        this.series[0].points[60].update({
        dataLabels: {
          enabled: true,
          format: 'Total',
          align: 'center',
          verticalAlign: 'bottom',
          style: {
            color: '#333',
          },
          y: -20
        }
      });
    }
  };
  if ($('#growler-flights').length){
    Highcharts.chart('growler-flights', {
        xAxis: {
            categories: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"]
        },
        tooltip: {
        	enabled: true,
        },
        yAxis: {
        	title: {
          	text: ''
            }
        },
				title: {
            text: 'Flights by Electronic Attack Wing in Olympic Military Operating Area (established 1942)',
        },
        credits: {
        	enabled: false
        },
        legend: {
        	enabled: false
        },
        plotOptions: {
            series: {
              color: '#556B2F',
              crosshairs:true,
              states: {
                hover: {
                    enabled: false,
                    halo: {
                        size: 0
                    }
                }
              },
              marker: {
                  enabled: false
              }
            }
        },
        series: [{
            data: [1998, 1712, 1886, 1517, 1735, 2059, 2269, 2372, 2179, 1943, 1964],
            name:'Number of flights'
        }]
      });
    };
    if ($('#growler-fleet').length){
      for (var x=0;x<118;x++){
        $("#2008").append('<div class="growler-box hidden"><img width="20" src="images/growlers/jet.png"/></div>');
        $("#2018").append('<div class="growler-box"><img width="20" src="images/growlers/jet.png"/></div>');
          if(x >81){
            $("#2015").append('<div class="growler-box hidden"><img width="20" src="images/growlers/jet.png"/></div>');
          }
          else{
            $("#2015").append('<div class="growler-box"><img width="20" src="images/growlers/jet.png"/></div>');
          }
      }
    /*  var y=0;
      while(y<119){
          $("#2018").append('<div class="growler-box"><img width="20" src="http://origin.kcts9.org/earthfix/images/growlers/fighter_jet.png"/></div>');
        y += 1
      }*/
    }
    if ($('#personnel').length){
      Highcharts.chart('personnel', {
       chart: {
           type: 'column'
       },
       title: {
           text: 'Estimated Personnel at Whidbey Island Naval Air Station'
       },
       xAxis: {
           categories: ['2016', '2018', '2019']
       },
       yAxis: {
           min: 0,
           title: {
               text: 'Personnel'
           }
       },
       legend: {
           align: 'right',
           x: -30,
           verticalAlign: 'top',
           y: 25,
           floating: true,
           backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
           borderColor: '#CCC',
           borderWidth: 1,
           shadow: false
       },
       plotOptions: {
           column: {
               stacking: 'normal',
               dataLabels:{
                 enabled:true
               }
           }
       },
       legend: {
           enabled: true
       },
       series: [{
           color: 'rgba(51,72,93,0.5)',
           name: 'Civilian',
           data: [2400, 2400, 2400]
       }, {
           color: 'rgba(51,72,93,0.75)',
           name: 'Military',
           data: [15840, 17160, 19580]
       }]
     });
   };
   if ($('#hydro-chart').length){
     Highcharts.chart('hydro-chart', {
       chart: {
           type: 'area'
       },
       title: {
           text: 'Hydropower Generated in the United States'
       },
       xAxis: {
           categories: ['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975'],
           tickmarkPlacement: 'on',
           title: {
               enabled: false
           }
       },
       yAxis: {
           title: {
               text: 'Megawatts produced'
           },
           //opposite: true,
       },
       tooltip: {
         borderColor: 'none'
       },
       plotOptions: {
           area: {
               stacking: 'normal',
               lineColor: '#fff',
               lineWidth: 1,
               marker: {
                   enabled: false,
                   lineWidth: 0,
                   lineColor: '#fff'
               }
           }
       },
       series: [{
           name: 'Hydropower',
           color: 'rgba(69,99,124,0.85)',
           data: [10.5, 4, 2.4, 29.6, 32.7, 35.7, 32.9, 109.2, 42.5, 71.2, 165.3, 137.8, 135.2, 360.9, 178.9, 258.3, 176.9, 270.6, 151.8, 312.2, 157.4, 283, 171, 379.4, 502.6, 710.1, 289.4, 422.7, 973.8, 253.5, 830.4, 604.9, 208.2, 35.7, 37.5, 53.1, 788.2, 334.9, 676.7, 448, 404.1, 731.5, 1125.8, 1078, 1054.6, 398.7, 55.7, 170.4, 812.7, 1294.8, 1191.2, 1395.3, 1697.8, 1901.8, 1292.1, 1764.2, 1203.1, 1502.5, 2835.3, 1742.3, 1601.6, 3441.3, 2584.2, 3441.7, 2309.4, 2120.3, 1576.4, 3938.8, 2891.1, 2029.2, 1591.5, 1412.4, 634.7, 5870.4, 1405.8, 2552.8 ]
       }]
     });
   }
   if ($('#worker-claims').length){
     Highcharts.chart('worker-claims', {
        series: [{
            type: "treemap",
            // layoutAlgorithm: 'strip',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                  dataLabels: {
                      enabled: true,
                      align: 'left',
                      verticalAlign: 'top',
                      style: {
                          fontSize: '15px',
                          color: '#fff',
                          fontWeight: 'light',
                          textShadow: false
                      }
                  }
            },
            {
                level: 2,
                layoutAlgorithm: 'stripes',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    verticalAlign: 'middle',
                    //y:200,
                    style: {
                        fontSize: '10px',
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    formatter: function(){
                        return '<b>' + this.point.name + '</b> <br/>' + numberWithCommas(this.point.value) + '';
                    }
                 }
            }
          ],
            data: [{
                id: 'A',
                name: 'Hanford',
                color: 'rgba(51,72,93,0.75)',
            }, {
                id: 'B',
                name: 'All other nuclear sites',
                color: 'rgba(51,72,93,0.75)'
            }, {
                name: 'Claims unpaid',
                parent: 'A',
                value: 16353
            }, {
                name: 'Claims paid',
                parent: 'A',
                value: 11622,
                color: 'rgba(51,72,93,0.5)'
            }, {
                name: 'Claims unpaid',
                parent: 'B',
                value: 161799
            }, {
                name: 'Claims paid',
                parent: 'B',
                value: 95407,
                color: 'rgba(51,72,93,0.5)'
            }]
        }],
        tooltip: {
          enabled: false
        },
        title: {
            text: 'Worker Illness Claims at U.S. Nuclear Sites'
        }
    });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
   }
   if($('#shipbuilding-chart').length){
     Highcharts.chart('shipbuilding-chart', {
              chart: {
                  type: 'bar'
              },
              title: {
                  text: 'WWII Ships Built by Emergency Builders in NW'
              },
              xAxis: {
                  categories: ['Liberty ship (cargo)', 'Tractor/Tug', 'Victory ship (cargo)', 'Tanker', 'Landing craft', 'Barge/Lighter', 'Other cargo/freighter', 'Sub chaser', 'Minesweeper', 'Net layer', 'Dry-Dock', 'Cable boat', 'Passenger boat', 'Launch', 'Patrol boat', 'Escort carrier'],
                  title: {
                      text: null
                  }
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: ' ',
                      align: 'high'
                  },
                  labels: {
                      overflow: 'justify'
                  }
              },
              tooltip: {
                  valueSuffix: ''
              },
              plotOptions: {
                  fillOpacity: 0.5,
                  bar: {
                      dataLabels: {
                          enabled: false
                      }
                  }
              },
              legend: {
              		enabled: false,
              },
              credits: {
                  enabled: false
              },
              series: [{
                  color: 'rgba(236,14,27,0.75)',
                  borderColor: 'none',
                  name: 'Ships built',
                  data: [346, 291, 175, 148, 141, 139, 108, 45, 34, 21, 15, 10, 10, 8, 7, 3]
              }]
          });
  }
    if($('#shipbreaking-chart').length){
      Highcharts.chart('shipbreaking-chart', {
          chart: {
              type: 'bar'
          },
          exporting: {
              enabled: false
          },
          title: {
              text: 'Ships broken by major NW dismantling sites'
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: ["Liberty ship (cargo)", "Other cargo/freighter", "Destroyer", "Landing craft", "Submarine", "Cruiser", "Victory ship (cargo)", "Aircraft carrier", "Patrol craft", "Attack transport", "Tanker", "Barge/Lighter", "Repair ship", "Net layer", "Escort carrier", "Attack cargo ship", "Transport", "Minesweeper", "Frigate", "Seaplane tender", "Tractor/Tug", "Sub chaser", "Heavy cruiser", "Hospital ship", "Coast Guard Cutter", "Barracks ship", "Command ship", "Surveying ship"],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: ' ',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: ''
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: false
                  }
              }
          },
          legend: {
              enabled: false,
          },
          credits: {
              enabled: false
          },
          series: [{
              color: 'rgba(236,14,27,0.75)',
              borderColor: 'none',
              opacity: 0.25,
              name: 'Ships broken',
              data: [157, 37, 33, 24, 10, 10, 10, 8, 8, 8, 7, 7, 7, 6, 6, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1]
          }]
      });
      }
}
