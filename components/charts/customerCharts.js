// colors
const blue = '#A0D7E7';
const blueLight = '#0e97b5';
const purple = '#6C5DD3';
const white = '#ffffff';
const blueOpacity = '#e6efff';
//const blueLight = '#50B5FF';
const pink = '#FFB7F5';
const orangeOpacity = '#fff5ed';
const yellow = '#FFCE73';
const green = '#7FBA7A';
const red = '#FF754C';
const greenOpacity = '#ecfbf5';
const gray = '#808191';
const grayOpacity = '#f2f2f2';
const grayLight = '#E2E2EA';
const borderColor = "#E4E4E4";

const CustomerVisitShop = {
  options: {
    chart: {
      id: "customer-visit-shop",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['TEMPLE', 'IRVINE', 'CUPERTINO']
    },
    colors: [purple, blue, pink, gray],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1
        }
      }
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        //columnWidth: '50%'
      }
    },
    legend: {
      show: false
    }
  },
  series: [],
}

const CustomerVisitByDate = {
  options: {
    chart: {
      id: "customer-visit-by-date",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: []
    },
    colors: [purple, blue, pink, gray],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1
        }
      }
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true
    }
  },
  series: [],
}

export {CustomerVisitShop, CustomerVisitByDate}